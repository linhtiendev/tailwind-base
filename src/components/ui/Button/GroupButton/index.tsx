import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

import FacebookIcon from 'assets/icons/icon_facebook.svg'
import GoogleIcon from 'assets/icons/icon_google.svg'
import ZaloIcon from 'assets/icons/icon_zalo.svg'
import { loginWithGoogle, loginWithFacebook } from 'utils/login'

const GroupButton = () => {
  return (
    <>
      <div className='flex w-full flex-col gap-1 md:flex-row'>
        <Button
          block
          disabled
          className='relative flex h-10 cursor-pointer justify-center gap-2 p-[9px] font-semibold md:w-[102px]'
        >
          <Image
            src={ZaloIcon}
            alt='zalo'
            height={23}
            width={23}
            className='absolute left-10 h-[23px] w-[23px] md:static'
          />
          Zalo
        </Button>
        <Button
          className='relative flex h-10 cursor-pointer  justify-center gap-2 p-[9px] font-semibold md:w-[102px]'
          onClick={loginWithGoogle}
        >
          <Image
            src={GoogleIcon}
            alt='google'
            height={23}
            width={23}
            className='absolute left-10 h-[23px] w-[23px] md:static'
          />
          Google
        </Button>
        <Button
          disabled
          onClick={loginWithFacebook}
          className='relative flex h-10 cursor-pointer  justify-center gap-2 p-[9px] font-semibold md:w-[102px]'
        >
          <Image
            src={FacebookIcon}
            alt='google'
            height={23}
            width={23}
            className='absolute left-10 h-[23px] w-[23px] md:static'
          />
          Facebook
        </Button>
      </div>
    </>
  )
}

export default GroupButton
