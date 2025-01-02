import { Button, type ButtonProps } from "react-aria-components";

import { composeTailwindRenderProps, focusVisibleOutlineStyle } from "./utils";

export {
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosureGroup as DisclosureGroup,
  UNSTABLE_DisclosurePanel as DisclosurePanel,
} from "react-aria-components";

export function DisclosureControl(props: ButtonProps) {
  const { className } = props;

  return (
    <Button
      {...props}
      slot="trigger"
      className={composeTailwindRenderProps(className, [
        "group flex items-center gap-x-1 rounded-md outline-none",
        focusVisibleOutlineStyle,
      ])}
    />
  );
}
