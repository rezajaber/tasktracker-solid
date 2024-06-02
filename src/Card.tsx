import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import "./Card.css";
import CategoryEdit from "./CategoryEdit";

import { TextField, TextFieldRoot } from "@/components/ui/textfield";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextArea } from "@/components/ui/textarea";
import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { For } from "solid-js";
import {
  DatePicker,
  DatePickerContent,
  DatePickerContext,
  DatePickerInput,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
} from "@/components/ui/date-picker";

interface CardProps {
  priorityColor: string;
  cardCategory: string;
  cardTitle: string;
  cardContent: string;
  cardDate: string;
}

const App: Component<CardProps> = (props) => {
  const [currentColor, setCurrentColor] = createSignal(props.priorityColor);
  const [category, setCategory] = createSignal("No categories found");
  const [taskName, setTaskName] = createSignal(props.cardTitle);

  const colors = [
    "text-green-500",
    "text-yellow-500",
    "text-orange-500",
    "text-red-500",
  ];

  const colorChange = () => {
    const currentIndex = colors.indexOf(currentColor());
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentColor(colors[nextIndex]);
  };

  return (
    <div>
      {/* FULL CARD */}
      <div class="card-container grid-rows-layout grid gap-3.5 rounded-lg p-5">
        {/* HEADER OF CARD */}
        <div class="flex justify-between  items-center">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={`h-3 w-3 ${currentColor()} fill-current cursor-pointer`}
              onClick={colorChange}
            >
              <circle cx="12" cy="12" r="10" />
            </svg>

            <span class="font-medium">{props.cardCategory}</span>
          </div>

          {/* CATEGORY */}
          <DropdownMenu>
            <DropdownMenuTrigger
              as={(props: DropdownMenuSubTriggerProps) => (
                <Button size="xs" {...props}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pencil"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </Button>
              )}
            />
            <DropdownMenuContent class="w-52">
              <DropdownMenuRadioGroup value={category()} onChange={setCategory}>
                <DropdownMenuRadioItem value="No categories found">
                  No Categories found
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <CategoryEdit />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* BODY OF CARD */}
        <div class="-mt-1 flex flex-col gap-1">
          <TextFieldRoot class="flex items-center gap-2">
            <TextField
              type="text"
              value={taskName()}
              placeholder="Taskname"
              class="px-0 text-lg font-semibold h-full border-none shadow-none focus-visible:outline-none focus-visible:ring-0 truncate"
            />
          </TextFieldRoot>

          <TextFieldRoot>
            <TextArea
              class="line-clamp-3 resize-none text-sm"
              placeholder="Task-Name?"
            >
              {props.cardContent}
            </TextArea>
          </TextFieldRoot>
        </div>

        <Separator class="w-full border-gray-500" />

        {/* FOOTER OF CARD */}
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <DatePicker>
              <DatePickerInput placeholder="Pick a date" />
              <DatePickerContent>
                <DatePickerView view="day">
                  <DatePickerContext>
                    {(api) => (
                      <>
                        <DatePickerViewControl>
                          <DatePickerViewTrigger>
                            <DatePickerRangeText />
                          </DatePickerViewTrigger>
                        </DatePickerViewControl>
                        <DatePickerTable>
                          <DatePickerTableHead>
                            <DatePickerTableRow>
                              <For each={api().weekDays}>
                                {(weekDay) => (
                                  <DatePickerTableHeader>
                                    {weekDay.short}
                                  </DatePickerTableHeader>
                                )}
                              </For>
                            </DatePickerTableRow>
                          </DatePickerTableHead>
                          <DatePickerTableBody>
                            <For each={api().weeks}>
                              {(week) => (
                                <DatePickerTableRow>
                                  <For each={week}>
                                    {(day) => (
                                      <DatePickerTableCell value={day}>
                                        <DatePickerTableCellTrigger>
                                          {day.day}
                                        </DatePickerTableCellTrigger>
                                      </DatePickerTableCell>
                                    )}
                                  </For>
                                </DatePickerTableRow>
                              )}
                            </For>
                          </DatePickerTableBody>
                        </DatePickerTable>
                      </>
                    )}
                  </DatePickerContext>
                </DatePickerView>
                <DatePickerView
                  view="month"
                  class="w-[calc(var(--preference-width)-(0.75rem*2))]"
                >
                  <DatePickerContext>
                    {(api) => (
                      <>
                        <DatePickerViewControl>
                          <DatePickerViewTrigger>
                            <DatePickerRangeText />
                          </DatePickerViewTrigger>
                        </DatePickerViewControl>
                        <DatePickerTable>
                          <DatePickerTableBody>
                            <For
                              each={api().getMonthsGrid({
                                columns: 4,
                                format: "short",
                              })}
                            >
                              {(months) => (
                                <DatePickerTableRow>
                                  <For each={months}>
                                    {(month) => (
                                      <DatePickerTableCell value={month.value}>
                                        <DatePickerTableCellTrigger>
                                          {month.label}
                                        </DatePickerTableCellTrigger>
                                      </DatePickerTableCell>
                                    )}
                                  </For>
                                </DatePickerTableRow>
                              )}
                            </For>
                          </DatePickerTableBody>
                        </DatePickerTable>
                      </>
                    )}
                  </DatePickerContext>
                </DatePickerView>
                <DatePickerView
                  view="year"
                  class="w-[calc(var(--preference-width)-(0.75rem*2))]"
                >
                  <DatePickerContext>
                    {(api) => (
                      <>
                        <DatePickerViewControl>
                          <DatePickerViewTrigger>
                            <DatePickerRangeText />
                          </DatePickerViewTrigger>
                        </DatePickerViewControl>
                        <DatePickerTable>
                          <DatePickerTableBody>
                            <For
                              each={api().getYearsGrid({
                                columns: 4,
                              })}
                            >
                              {(years) => (
                                <DatePickerTableRow>
                                  <For each={years}>
                                    {(year) => (
                                      <DatePickerTableCell value={year.value}>
                                        <DatePickerTableCellTrigger>
                                          {year.label}
                                        </DatePickerTableCellTrigger>
                                      </DatePickerTableCell>
                                    )}
                                  </For>
                                </DatePickerTableRow>
                              )}
                            </For>
                          </DatePickerTableBody>
                        </DatePickerTable>
                      </>
                    )}
                  </DatePickerContext>
                </DatePickerView>
              </DatePickerContent>
            </DatePicker>
          </div>

          <DropdownMenu placement="bottom">
            <DropdownMenuTrigger
              as={(props: DropdownMenuSubTriggerProps) => (
                <Button
                  size="xs"
                  variant="ghost"
                  class="px-0 hover:bg-transparent"
                  {...props}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-ellipsis cursor-pointer duration-300 ease-in-out hover:rotate-90"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              )}
            />
            <DropdownMenuContent class="grid gap-1 w-40">
              <div class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-0.5 duration-300 ease-in-out hover:bg-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-list-checks text-green-600"
                >
                  <path d="m3 17 2 2 4-4" />
                  <path d="m3 7 2 2 4-4" />
                  <path d="M13 6h8" />
                  <path d="M13 12h8" />
                  <path d="M13 18h8" />
                </svg>
                <span class="text-sm">Task Done</span>
              </div>
              <div class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-0.5 duration-300 ease-in-out hover:bg-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash-2 text-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
                <span class="text-sm">Delete Task</span>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default App;
