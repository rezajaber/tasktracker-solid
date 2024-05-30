import { cn } from "@/libs/cn";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as TextFieldPrimitive from "@kobalte/core/text-field";
import type { ValidComponent, VoidProps } from "solid-js";
import { splitProps } from "solid-js";

type TextAreaProps = VoidProps<
  TextFieldPrimitive.TextFieldTextAreaProps & {
    class?: string;
  }
>;

export const TextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextAreaProps>
) => {
  const [local, rest] = splitProps(props as TextAreaProps, ["class"]);

  return (
    <TextFieldPrimitive.TextArea
      class={cn(
        "flex min-h-[60px] w-full rounded-md  bg-transparent  py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...rest}
    />
  );
};
