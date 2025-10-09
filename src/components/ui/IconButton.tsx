import { forwardRef } from "react"
import { BaseIconButton, type BaseIconButtonProps } from "./base/base-icon-button"

export interface IconButtonProps extends BaseIconButtonProps {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return (
      <BaseIconButton
        ref={ref}
        {...props}
      />
    )
  }
)