import { forwardRef } from "react"
import { BaseButton, type BaseButtonProps } from "./base/base-button.tsx"

export interface ButtonProps extends BaseButtonProps {
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
Button.displayName = "Button"

export { Button }
