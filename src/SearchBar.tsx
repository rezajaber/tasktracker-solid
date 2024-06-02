import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextField, TextFieldRoot } from "@/components/ui/textfield";
import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchBar: Component = () => {
  const [showDone, setShowDone] = createSignal<boolean>(false);
  const [overdue, setOverdue] = createSignal<boolean>(false);
  const [critical, setCritical] = createSignal<boolean>(false);
  const [high, setHigh] = createSignal<boolean>(false);
  const [normal, setNormal] = createSignal<boolean>(false);
  const [low, setLow] = createSignal<boolean>(false);

  return (
    <div class="mx-auto grid justify-between gap-2 md:mx-0 md:flex">
      <div class="flex gap-2">
        <div class="relative w-80 max-w-md items-center">
          <TextFieldRoot class="w-full max-w-xs ">
            <TextField
              id="search"
              type="text"
              placeholder="Create or Search for a Task..."
              class="pl-10"
            />
          </TextFieldRoot>
          <span class="absolute inset-y-0 start-0 flex items-center justify-center px-3">
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
              class="lucide lucide-search text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
        </div>

        <Button class="hidden md:flex" type="submit">
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
            class="lucide lucide-circle-plus mr-1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          Create Task
        </Button>
      </div>

      <div class="flex justify-between">
        <Button class="md:hidden" type="submit">
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
            class="lucide lucide-circle-plus mr-1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          Create Task
        </Button>

        <DropdownMenu placement="bottom">
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
                  class="lucide lucide-sliders-horizontal mr-1.5"
                >
                  <line x1="21" x2="14" y1="4" y2="4" />
                  <line x1="10" x2="3" y1="4" y2="4" />
                  <line x1="21" x2="12" y1="12" y2="12" />
                  <line x1="8" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="16" y1="20" y2="20" />
                  <line x1="12" x2="3" y1="20" y2="20" />
                  <line x1="14" x2="14" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="10" y2="14" />
                  <line x1="16" x2="16" y1="18" y2="22" />
                </svg>
                Filter
              </Button>
            )}
          />
          <DropdownMenuContent class="w-56">
            <DropdownMenuCheckboxItem
              checked={showDone()}
              onChange={setShowDone}
            >
              Show Done
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={overdue()} onChange={setOverdue}>
              Overdue
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
              checked={critical()}
              onChange={setCritical}
            >
              Critical
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={high()} onChange={setHigh}>
              High
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={normal()} onChange={setNormal}>
              Normal
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={low()} onChange={setLow}>
              Low
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchBar;
