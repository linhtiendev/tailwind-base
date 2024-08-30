import Image from 'next/image'

import FaceBookIcon from 'assets/icons/icon_facebook.svg'
import AhamoveImage from 'assets/icons/logo_ahamove.svg'
import FastDeliveryImage from 'assets/icons/logo_giaohangnhanh.svg'
import SaveDeliveryImage from 'assets/icons/logo_giaohangtietkiem.svg'
import InstagramIcon from 'assets/icons/logo_ig.svg'
import LinkedinIcon from 'assets/icons/logo_linkin.svg'
import TwitterIcon from 'assets/icons/logo_twitter.svg'
import ViettelImage from 'assets/icons/logo_viettel.svg'
import RegisterImage from 'assets/images/image_dadangky.png'

const Footer = () => {
  return (
    <div className='load_linear mt-auto w-full border-t-4 border-t-loyalty-orange-500 bg-white px-5 py-5 xl:px-16'>
      <div className='mx-auto flex w-full flex-col'>
        <div className='w-full sm:grid sm:grid-flow-row sm:grid-cols-12 sm:grid-rows-1 sm:px-2 '>
          <div className='sm:grid-row-6 col-span-3 flex flex-col border-b border-dashed border-loyalty-gray-50 sm:col-span-2 sm:border-0'>
            <p className='mb-3 text-sm font-semibold text-loyalty-blue-700 sm:text-lg'>
              Hỗ trợ khách hàng
            </p>
            <ul className='grid grid-cols-2 pb-2 text-loyalty-gray-50 sm:block sm:pb-0' />
          </div>
          <div className='col-start-4 col-end-7  hidden flex-col sm:block'>
            <p className='mb-3 text-sm font-semibold text-loyalty-blue-700 sm:text-lg '>Về ...</p>
            <ul className='text-loyalty-gray-50'>
              {/* {listArticleVata?.map((article) => (
                <li key={article?.Id} className='my-2 cursor-pointer text-sm transition-all '>
                  <a href={`/article/${article?.Alias}-${article?.Id}`}>{article?.Name ?? ''}</a>
                </li>
              ))} */}
            </ul>
          </div>
          <div className=' col-start-7 col-end-9 flex gap-[18px] py-4 sm:flex-col sm:gap-0 sm:py-0 '>
            <p className='mb-3 text-sm font-semibold  text-loyalty-blue-700 sm:text-lg'>
              Chứng nhận bởi
            </p>
            <Image
              src={RegisterImage}
              alt='dadangky'
              width={120}
              height={38}
              className='h-[38px] w-[120px]'
            />
          </div>

          <div className='col-start-9 col-end-11   hidden flex-col sm:block'>
            <p className='mb-3 text-sm font-semibold text-loyalty-blue-700 sm:text-lg'>
              Dịch vụ giao hàng
            </p>
            <div className='container flex w-3/4 flex-col gap-2 sm:flex-row sm:flex-wrap'>
              <Image
                src={FastDeliveryImage}
                alt='giaohangnhanh'
                width={60}
                height={40}
                className='h-auto w-auto'
              />
              <Image
                src={SaveDeliveryImage}
                alt='giaohangtietkiem'
                width={98}
                height={28}
                className='h-7 w-[98px]'
              />
              <Image
                src={ViettelImage}
                alt='viettel'
                width={68}
                height={30}
                className='h-[30px] w-[68px]'
              />
              <Image
                src={AhamoveImage}
                alt='ahamove'
                width={62}
                height={32}
                className='h-8 w-[62px]'
              />
            </div>
          </div>
          <div className='col-start-11 col-end-12 hidden flex-col sm:block'>
            <p className='mb-3 text-sm font-semibold text-loyalty-blue-700 sm:text-lg'>Kết nối</p>
            <div className='mb-8 mt-2 flex w-full flex-wrap gap-2 xl:flex-nowrap'>
              <Image
                src={FaceBookIcon}
                alt='facebook'
                height={30}
                width={30}
                className='h-[30px] w-[30px]'
              />
              <Image
                src={InstagramIcon}
                alt='instagram'
                height={30}
                width={30}
                className='h-[30px] w-[30px]'
              />
              <Image
                src={TwitterIcon}
                alt='twitter'
                height={30}
                width={30}
                className='h-[30px] w-[30px]'
              />
              <Image
                src={LinkedinIcon}
                alt='linkedin'
                height={30}
                width={30}
                className='h-[30px] w-[30px]'
              />
            </div>
          </div>
        </div>
        <div className='h-px w-full bg-loyalty-gray-50' />
        <div className='w-5/6 pb-10 pt-4 text-loyalty-gray-50 sm:w-full md:pb-0'>
          <p className='cursor-pointer text-[13px] font-semibold transition-all  '>
            Công Ty Phần Mềm Kỷ Nguyên Số
          </p>
          <span className=''>Trụ sở: </span>
          <span className='font-medium'>TP HCM,</span>
          <p className='text-sm'>
            <a href='https://www.google.com/maps/place/70+%C4%90.+L%E1%BB%AF+Gia,+Ph%C6%B0%E1%BB%9Dng+9,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7712002,106.6500387,17z/data=!3m1!4b1!4m6!3m5!1s0x31752ebff57c8093:0x60f66ba2897d107a!8m2!3d10.7711949!4d106.6526136!16s%2Fg%2F11f2clb333?hl=vi-VN&entry=ttu'>
              341A, Lê Trọng Tấn, Tp. Hồ Chí Minh, Việt Nam.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
