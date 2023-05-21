import React, { ButtonHTMLAttributes, FC } from 'react'
import { Loader2 } from 'lucide-react'

type Props = {
    isLoading: boolean,
    className: string,
    children: React.ReactNode
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const AuthButton: FC<ButtonProps> = ({
    className,
    children,
    isLoading,
    ...props
  }) => {
  return (
    <button 
    disabled={isLoading} 
    className={className} 
    {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
    </button>
  )
}

export default AuthButton