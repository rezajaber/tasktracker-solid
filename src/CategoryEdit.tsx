import type { Component } from "solid-js";
import { Button } from "@/components/ui/button";
import { TextField, TextFieldRoot } from "@/components/ui/textfield";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CategoryEdit: Component = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger as-child>
          <Button class="my-1 w-full">
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
            Edit Categories
          </Button>
        </DialogTrigger>

        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Categories</DialogTitle>
            <DialogDescription>
              Here you can add or delete categories!
            </DialogDescription>
          </DialogHeader>

          <div class="grid gap-5">
            <div class="grid gap-2">
              <div class="flex gap-2">
                <TextFieldRoot>
                  <TextField
                    disabled
                    type="text"
                    placeholder="Create a new Task..."
                    class="border border-primary bg-primary text-white"
                  />
                </TextFieldRoot>
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
                    class="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </Button>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <TextFieldRoot>
                <TextField
                  type="text"
                  placeholder="Create a new Task..."
                  class="border border-primary focus-visible:ring-0"
                />
              </TextFieldRoot>
              <Button type="submit">Create</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryEdit;
