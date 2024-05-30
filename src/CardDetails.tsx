import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import CategoryEdit from "./CategoryEdit";
import MarkDownLegend from "./MarkDownLegend";

import { Button } from "@/components/ui/button";
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
import { setHydrateContext } from "solid-js/types/render/hydration";

const Card: Component = () => {
  const [priority, setPriority] = createSignal("");
  const [category, setCategory] = createSignal("No categories found");

  return (
    <div>
      <div class="flex justify-between">
        <div class="flex gap-2">
          {/* PRIORITY */}
          <DropdownMenu>
            <DropdownMenuTrigger
              as={(props: DropdownMenuSubTriggerProps) => (
                <Button {...props}>
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
                    class="lucide lucide-gallery-vertical-end mr-1.5"
                  >
                    <path d="M7 2h10" />
                    <path d="M5 6h14" />
                    <rect width="18" height="12" x="3" y="10" rx="2" />
                  </svg>
                  Priority
                </Button>
              )}
            />
            <DropdownMenuContent class="w-40">
              <DropdownMenuRadioGroup value={priority()} onChange={setPriority}>
                <DropdownMenuRadioItem value="Critical">
                  Critical
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Normal">
                  Normal
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CATEGORY */}
          <DropdownMenu>
            <DropdownMenuTrigger
              as={(props: DropdownMenuSubTriggerProps) => (
                <Button {...props}>
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
                    class="lucide lucide-layers mr-1.5 "
                  >
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                  Category
                </Button>
              )}
            />
            <DropdownMenuContent class="w-52">
              <DropdownMenuRadioGroup value={category()} onChange={setCategory}>
                <DropdownMenuRadioItem value="No categories found">
                  No Categories found
                </DropdownMenuRadioItem>
                <CategoryEdit />
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div class="flex gap-2">
          {/* CALENDER */}
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

          <MarkDownLegend />
        </div>
      </div>
    </div>
  );
};

export default Card;
