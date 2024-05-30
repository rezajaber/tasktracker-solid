import "./Card.css";

import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextArea } from "@/components/ui/textarea";
import { TextFieldRoot } from "@/components/ui/textfield";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CardProps {
  priorityColor: string;
  cardCategory: string;
  cardTitle: string;
  cardContent: string;
  cardDate: string;
}

const App: Component<CardProps> = (props) => {
  return (
    <div>
      {/* FUL CARD */}
      <div class="card-container grid-rows-layout grid gap-3.5 rounded-lg p-5">
        {/* HEADER OF CARD */}
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
            class={`h-3 w-3 ${props.priorityColor} fill-current`}
          >
            <circle cx="12" cy="12" r="10" />
          </svg>

          <span class="font-medium">{props.cardCategory}</span>
        </div>

        {/* BODY OF CARD */}
        <div class="-mt-1 flex flex-col gap-1">
          <h1 class="line-clamp-1 resize-none text-lg font-semibold">
            {props.cardTitle}
          </h1>
          <TextFieldRoot>
            <TextArea class="line-clamp-3 resize-none text-sm">
              {props.cardContent}
            </TextArea>
          </TextFieldRoot>
        </div>

        <Separator class="w-full bg-gray-500" />

        {/* FOOTER OF CARD */}
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
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
              class="lucide lucide-calendar-clock"
            >
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h5" />
              <path d="M17.5 17.5 16 16.3V14" />
              <circle cx="16" cy="16" r="6" />
            </svg>
            <span class="text-sm">{props.cardDate}</span>
          </div>

          <DropdownMenu placement="bottom">
            <DropdownMenuTrigger
              as={(props: DropdownMenuSubTriggerProps) => (
                <Button variant="ghost" {...props}>
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
            <DropdownMenuContent class="grid w-40">
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
