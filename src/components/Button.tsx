import React from 'react'
import type { ReactNode } from 'react'

interface IButtonProps {
  variant: 'filled' | 'outlined'
  onClick: () => void
  children: ReactNode
  style?: React.CSSProperties
  className?: React.HTMLAttributes<HTMLDivElement>['className']
}

export const Button: React.FC<IButtonProps> = ({
  variant,
  onClick,
  children,
  style,
  className
}) => {
  const variantClasses = variant === 'filled'
    ? 'bg-primary text-white'
    : 'border border-primary text-primary'
  return (

    <div onClick={onClick} className={(`cursor-pointer select-none rounded-md p-2 px-6 hover:opacity-80 active:scale-95 active:opacity-90 ${variantClasses} ${className}`)} style={style}>
      {children}
    </div>
  )
}
