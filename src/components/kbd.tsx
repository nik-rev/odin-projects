import { Keyboard as AriaKeyboard } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export default {};
export type KeyboardProps = Omit<JSX.IntrinsicElements["div"], "children"> & {
  children: string;
};

export function Kbd({ className, children, ...props }: KeyboardProps) {
  return (
    <AriaKeyboard
      {...props}
      data-ui="kbd"
      className={twMerge(
        "font-sans text-base/6 tracking-widest text-muted/75 sm:text-sm/6",
        className,
      )}
    >
      {children}
    </AriaKeyboard>
  );
}
