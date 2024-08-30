import fakeAvatar from 'assets/images/fake_avatar.png'

import DescComponent from '../DescComponent'

const IntroComponent = () => {
  return (
    <section className='intro mx-auto mb-60 flex max-w-[70%] items-center justify-center'>
      <DescComponent />
      <div className='intro-avatar ml-5'>
        <img className='w-full' src={fakeAvatar.src} alt='' />
      </div>
    </section>
  )
}

export default IntroComponent
