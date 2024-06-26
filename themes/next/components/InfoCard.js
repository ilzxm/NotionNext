import LazyImage from '@/components/LazyImage'
import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

const InfoCard = (props) => {
  const { siteInfo } = props
  const { toggleDarkMode } = useGlobal()
  // 用户手动设置主题
  const handleChangeDarkMode = () => {
    toggleDarkMode()
  }
  return <>
    <div className='flex flex-col items-center justify-center '>
        <div className='hover:rotate-180 hover:scale-125 transform duration-200 cursor-pointer' onClick={ handleChangeDarkMode }>
        <LazyImage src={siteInfo?.icon} className='rounded-full' width={120} alt={siteConfig('AUTHOR')}/>
        </div>
        <div className='text-2xl font-serif dark:text-white py-2 hover:scale-105 transform duration-200'>{siteConfig('AUTHOR')}</div>
        <div className='font-light dark:text-white py-2 hover:scale-105 transform duration-200 text-center'>{siteConfig('BIO')}</div>
        <SocialButton/>
    </div>
  </>
}

export default InfoCard
