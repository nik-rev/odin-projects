import {
  Group,
  type InputProps,
  NumberField as AriaNumberField,
  type NumberFieldProps as AriaNumberFieldProps,
} from "react-aria-components";

import { Button } from "./button";
import { Input } from "./field";
import { MinusIcon, PlusIcon } from "./icons";
import { Separator } from "./separator";
import { composeTailwindRenderProps, inputFieldStyle } from "./utils";

export default {};
export type NumberFieldProps = {} & AriaNumberFieldProps;

export function NumberField(props: NumberFieldProps) {
  const { className } = props;

  return (
    <AriaNumberField
      {...props}
      className={composeTailwindRenderProps(className, inputFieldStyle)}
    />
  );
}

export function NumberInput(props: InputProps) {
  const { className } = props;

  return (
    <Group
      data-ui="control"
      className="group isolate grid grid-cols-[auto_auto_1fr_auto_auto]"
    >
      <Button
        slot="decrement"
        isIconOnly
        variant="plain"
        className="z-10 col-start-1 row-start-1 rounded-none hover:bg-transparent pressed:bg-transparent"
      >
        <MinusIcon />
      </Button>
      <Separator orientation="vertical" className="col-start-2 row-start-1" />
      <Input
        {...props}
        className={composeTailwindRenderProps(className, [
          "z-0",
          "col-span-full",
          "row-start-1",
          "px-[calc(theme(size.11)+10px)] sm:px-[calc(theme(size.9)+10px)]",
        ])}
      />

      <Separator orientation="vertical" className="-col-end-2 row-start-1" />

      <Button
        slot="increment"
        className="-col-end-1 row-start-1 rounded-none hover:bg-transparent pressed:bg-transparent"
        isIconOnly
        variant="plain"
      >
        <PlusIcon />
      </Button>
    </Group>
  );
}
