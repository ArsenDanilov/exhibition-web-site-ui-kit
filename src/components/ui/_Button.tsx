import { forwardRef } from "react"
import { BaseButton, type BaseButtonProps } from "./base/base-button.tsx"

export interface ButtonProps extends BaseButtonProps {
  fullWidth?: boolean
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
_Button.displayName = "Button"

export { _Button }
