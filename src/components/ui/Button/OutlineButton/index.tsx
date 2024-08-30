import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type OutlineButtonProps = {
  text: string
} & Omit<ComponentPropsWithoutRef<'button'>, 'type'>

const OutlineButton = ({ text, className, ...otherProps }: OutlineButtonProps) => {
  return (
    <button
      type='button'
      className={twMerge(
        'rounded-[6px] border border-loyalty-orange-400 bg-white px-5 py-2 font-roboto text-base font-medium text-loyalty-orange-400 outline-none transition-all hover:bg-loyalty-orange-200',
        className
      )}
      {...otherProps}
    >
      {text}
    </button>
  )
}

export default OutlineButton
