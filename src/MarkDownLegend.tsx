import type { Component } from "solid-js";
import { Button } from "@/components/ui/button";
import Card from "./Card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const cards = [
  {
    priorityColor: "text-red-500",
    cardCategory: "Cyber Security",
    cardTitle: "Hack The Box",
    cardContent:
      "Explore the latest trends in cybersecurity and learn how to protect your systems effectively.",
    cardDate: "22. September 2024",
  },
];

const MarkDownLegend: Component = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>
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
              class="lucide lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent class="max-h-[90dvh] max-w-xs grid-rows-[auto_minmax(0,1fr)_auto] rounded-md p-0 sm:max-w-[425px] place-items-center">
          <DialogHeader class="p-6 pb-0">
            <DialogTitle>Information - TaskTracker</DialogTitle>
            <DialogDescription>
              Below you can see what everything does and how it is suppose to
              work!
            </DialogDescription>
          </DialogHeader>

          {cards.map((card) => (
            <Card
              priorityColor={card.priorityColor}
              cardCategory={card.cardCategory}
              cardTitle={card.cardTitle}
              cardContent={card.cardContent}
              cardDate={card.cardDate}
            />
          ))}

          <div class="grid gap-2 text-sm sm:text-base w-full px-6 pb-6 mt-1">
            <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white text-sm">
              Click the circle to change the priority of the task.
            </p>

            <div class="">
              <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white text-sm">
                Click the edit button to add or delete categories.
              </p>
            </div>

            <div class="">
              <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white text-sm">
                Click the title to edit it.
              </p>
            </div>

            <div class="">
              <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white text-sm">
                Click on the description to edit it.
              </p>
            </div>

            <div class="">
              <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white text-sm">
                Click the date icon to change the date.
              </p>
            </div>

            <div class="">
              <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white text-sm">
                Click the three dots to delete or mark a task as done.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MarkDownLegend;
