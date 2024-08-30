import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import cssIcon from 'assets/icons/css_icon.png'
import flutterIcon from 'assets/icons/flutter_icon.png'
import githubIcon from 'assets/icons/github.svg'
import htmlIcon from 'assets/icons/html_icon.png'
import jsIcon from 'assets/icons/javascript_icon.png'
import mailIcon from 'assets/icons/mail.svg'
import nextIcon from 'assets/icons/nextjs_icon.png'
import reactIcon from 'assets/icons/react_icon.png'
import scssIcon from 'assets/icons/sass_icon.png'
import tailwindIcon from 'assets/icons/tailwind_icon.png'

const DescComponent = () => {
  return (
    <div className=''>
      <h1 className='mb-2 mt-32 text-5xl font-bold'>Software Developer</h1>
      <p className='mb-5 text-gray-500'>
        Hi, I&apos;m Pham Manh Huy. A passionate Software Developer <br />
        based in HCM, Viet Nam. 🇻🇳 🌸
      </p>
      <div className='mb-3 flex items-center gap-5'>
        <span>
          <Link href='https://github.com/huypham0508'>
            <Image width={32} height={32} className='w-8' alt='github icon' src={githubIcon} />
          </Link>
        </span>
        <span>
          <Link href='mailto:phammanhhhuy1107@gmail.com'>
            <Image
              width={32}
              height={32}
              className='w-8'
              alt='phammanhhhuy1107@gmail.com'
              src={mailIcon}
            />
          </Link>
        </span>
      </div>
      <div>
        <span className='text-2xl font-bold'>Tech stack |</span>
        <div className='mt-3 flex items-center justify-start gap-3'>
          <Image
            height={40}
            width={40}
            alt='html icon 3D'
            className='transform-animation'
            src={htmlIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt='css icon 3D'
            className='transform-animation'
            src={cssIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt='js icon 3D'
            src={jsIcon.src}
            className='transform-animation'
          />
          <Image
            height={40}
            width={40}
            alt='flutter icon 3D'
            className='transform-animation'
            src={flutterIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt='reactIcon icon 3D'
            className='transform-animation'
            src={reactIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt='nextjs icon 3D'
            className='transform-animation'
            src={nextIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt='tailwind icon 3D'
            className='transform-animation'
            src={tailwindIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt='sass icon 3D'
            className='transform-animation'
            src={scssIcon.src}
          />
        </div>
      </div>
    </div>
  )
}

export default DescComponent
