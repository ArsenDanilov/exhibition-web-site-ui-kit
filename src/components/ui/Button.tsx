import { forwardRef } from "react"
import { BaseButton, type BaseButtonProps } from "./base/base-button"

export interface ButtonProps extends BaseButtonProps {
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fullWidth, ...props }, ref) => {
    return (
      <BaseButton
        fullWidth={fullWidth}
        ref={ref}
        {...props}
      />
    )
  }
)
