import classNames from 'classnames'
import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type CancelButtonProps = {
  text: string
  active?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'type'>

const CancelButton = ({ text, active = false, className, ...otherProps }: CancelButtonProps) => {
  return (
    <button
      type='button'
      className={twMerge(
        'rounded-[6px] border border-loyalty-blue-700 bg-white px-5 py-2 font-roboto text-base font-medium text-loyalty-blue-700 outline-none transition-all hover:border-loyalty-blue-500 hover:bg-loyalty-white-600',
        classNames(className, {
          'border-loyalty-blue-500 bg-loyalty-white-600': active,
        })
      )}
      {...otherProps}
    >
      {text}
    </button>
  )
}

export default CancelButton
