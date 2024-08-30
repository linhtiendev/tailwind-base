import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type PrimaryButtonProps = {
  text: string
} & ComponentPropsWithoutRef<'button'>

const PrimaryButton = ({ text, className, ...otherProps }: PrimaryButtonProps) => {
  return (
    <button
      type='button'
      className={twMerge(
        'rounded-[6px] border border-loyalty-orange-500 bg-loyalty-orange-500 px-5 py-2 font-roboto text-base font-medium text-white outline-none transition-all hover:bg-loyalty-orange-600',
        className
      )}
      {...otherProps}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
