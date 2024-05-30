import type { Component } from "solid-js";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <DialogContent class="max-h-[90dvh] max-w-xs grid-rows-[auto_minmax(0,1fr)_auto] rounded-md p-0 sm:max-w-[425px]">
          <DialogHeader class="p-6 pb-0">
            <DialogTitle>Information - TaskTracker</DialogTitle>
            <DialogDescription>
              Below you can see what everything does and how it is suppose to
              work!
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 overflow-y-auto px-6">
            <div class="flex flex-col justify-between">
              <div class="grid gap-6">
                <div class="grid grid-cols-2 gap-2 text-center text-sm text-white sm:text-base">
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    -- converts to —
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    ... converts to …
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    &lt;- converts to ←
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    &gt;- converts to →
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    (c) converts to ©
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    (r) converts to ®
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    (tm) converts to ™
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    (sm) converts to ℠
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    1/2 converts to ½
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    1/4 converts to ¼
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    3/4 converts to ¾
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    +/- converts to ±
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    != converts to ≠
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    &lt;&lt; converts to «
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    &gt;&gt; converts to »
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1">
                    2*3 converts to 2×3
                  </p>
                  <p class="bg-primary px-2.5 py-1 rounded-md">
                    ^2 converts to ²
                  </p>
                  <p class="bg-primary px-2.5 py-1 rounded-md">
                    ^3 converts to ³
                  </p>
                </div>

                <div class="grid gap-2 text-sm sm:text-base">
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    # to ####### convert to h1 to h6
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    == your word == convert to
                    <span class="rounded-md bg-yellow-400 px-2 py-0.5 text-black">
                      highlighted
                    </span>
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    * , - or + converts to a bullet list
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    &gt; converts to BlockQuote
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    ``` or ~~~~ converts to CodeBlock
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    --- or ___ converts to a Horizontal Line
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    ***word*** or ___word___ = <b>word</b>
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    *word* or _word_ = <i>word</i>
                  </p>
                  <p class="rounded-md bg-primary px-2.5 py-1 text-center text-white">
                    ~~word~~ = <s>word</s>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MarkDownLegend;
