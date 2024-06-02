import { cn } from "@/libs/cn";
import type {
  DatePickerContentProps,
  DatePickerInputProps,
  DatePickerRangeTextProps,
  DatePickerRootProps,
  DatePickerTableCellProps,
  DatePickerTableCellTriggerProps,
  DatePickerTableHeaderProps,
  DatePickerTableProps,
  DatePickerTableRowProps,
  DatePickerViewControlProps,
  DatePickerViewProps,
  DatePickerViewTriggerProps,
} from "@ark-ui/solid";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/solid";
import type { VoidProps } from "solid-js";
import { splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { buttonVariants } from "./button";

export const DatePickerLabel = DatePickerPrimitive.Label;
export const DatePickerTableHead = DatePickerPrimitive.TableHead;
export const DatePickerTableBody = DatePickerPrimitive.TableBody;
export const DatePickerClearTrigger = DatePickerPrimitive.ClearTrigger;
export const DatePickerYearSelect = DatePickerPrimitive.YearSelect;
export const DatePickerMonthSelect = DatePickerPrimitive.MonthSelect;
export const DatePickerContext = DatePickerPrimitive.Context;

export const DatePicker = (props: DatePickerRootProps) => {
  return (
    <DatePickerPrimitive.Root
      format={(e) =>
        new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(new Date(e.toString()))
      }
      {...props}
    />
  );
};

export const DatePickerView = (props: DatePickerViewProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.View class={cn("space-y-4", local.class)} {...rest} />
  );
};

export const DatePickerViewControl = (props: DatePickerViewControlProps) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <DatePickerPrimitive.ViewControl
      class={cn("flex items-center justify-between", local.class)}
      {...rest}
    >
      <DatePickerPrimitive.PrevTrigger
        class={cn(
          buttonVariants({
            variant: "outline",
          }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 6l-6 6l6 6"
          />
        </svg>
      </DatePickerPrimitive.PrevTrigger>
      {local.children}
      <DatePickerPrimitive.NextTrigger
        class={cn(
          buttonVariants({
            variant: "outline",
          }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 6l6 6l-6 6"
          />
        </svg>
      </DatePickerPrimitive.NextTrigger>
    </DatePickerPrimitive.ViewControl>
  );
};

export const DatePickerRangeText = (
  props: VoidProps<DatePickerRangeTextProps>
) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.RangeText
      class={cn("text-sm font-medium", local.class)}
      {...rest}
    />
  );
};

export const DatePickerTable = (props: DatePickerTableProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.Table
      class={cn("w-full border-collapse space-y-1", local.class)}
      {...rest}
    />
  );
};

export const DatePickerTableRow = (props: DatePickerTableRowProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.TableRow
      class={cn("mt-2 flex w-full", local.class)}
      {...rest}
    />
  );
};

export const DatePickerTableHeader = (props: DatePickerTableHeaderProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.TableHeader
      class={cn(
        "w-8 flex-1 text-[0.8rem] font-normal text-muted-foreground",
        local.class
      )}
      {...rest}
    />
  );
};

export const DatePickerTableCell = (props: DatePickerTableCellProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.TableCell
      class={cn(
        "flex-1 p-0 text-center text-sm aria-selected:bg-accent aria-selected:text-accent-foreground aria-selected:first-of-type:rounded-l-md aria-selected:last-of-type:rounded-r-md aria-selected:has-[[data-outside-range]]:bg-accent/50",
        local.class
      )}
      {...rest}
    />
  );
};

export const DatePickerTableCellTrigger = (
  props: DatePickerTableCellTriggerProps
) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.TableCellTrigger
      class={cn(
        buttonVariants({ variant: "ghost" }),
        "h-8 w-full p-0 font-normal aria-disabled:cursor-not-allowed aria-disabled:text-muted-foreground aria-disabled:opacity-50 aria-disabled:hover:bg-transparent data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground aria-disabled:data-[in-range]:data-[outside-range]:opacity-30 [&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
        local.class
      )}
      {...rest}
    />
  );
};

export const DatePickerViewTrigger = (props: DatePickerViewTriggerProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerPrimitive.ViewTrigger
      class={cn(buttonVariants({ variant: "ghost" }), "h-7", local.class)}
      {...rest}
    />
  );
};

export const DatePickerContent = (props: DatePickerContentProps) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <DatePickerPrimitive.Content
          class={cn(
            "rounded-md border bg-popover p-3 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            local.class
          )}
          {...rest}
        >
          {local.children}
        </DatePickerPrimitive.Content>
      </DatePickerPrimitive.Positioner>
    </Portal>
  );
};

export const DatePickerInput = (props: DatePickerInputProps) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <DatePickerPrimitive.Control class="flex h-7 w-full rounded-md bg-secondary px-2 py-1 text-xs shadow-sm placeholder:text-black focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <DatePickerPrimitive.Trigger class="transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring">
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
          class="lucide lucide-calendar-clock mr-2 h-4 w-4"
        >
          <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h5" />
          <path d="M17.5 17.5 16 16.3V14" />
          <circle cx="16" cy="16" r="6" />
        </svg>
      </DatePickerPrimitive.Trigger>

      <DatePickerPrimitive.Input
        class={cn(
          "w-full appearance-none bg-secondary outline-none placeholder-black",
          local.class
        )}
        {...rest}
      />
    </DatePickerPrimitive.Control>
  );
};
