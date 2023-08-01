import BLOG from '@/blog.config'
import LazyImage from '@/components/LazyImage'
import React from 'react'
import SocialButton from './SocialButton'
import { saveDarkModeToCookies } from '@/themes/theme'
import { useGlobal } from '@/lib/global'

const InfoCard = (props) => {
  const { siteInfo } = props
  const { isDarkMode, updateDarkMode } = useGlobal()
  // 用户手动设置主题
  const handleChangeDarkMode = () => {
    const newStatus = !isDarkMode
    saveDarkModeToCookies(newStatus)
    updateDarkMode(newStatus)
    const htmlElement = document.getElementsByTagName('html')[0]
    htmlElement.classList?.remove(newStatus ? 'light' : 'dark')
    htmlElement.classList?.add(newStatus ? 'dark' : 'light')
  }
  return <>
    <div className='flex flex-col items-center justify-center '>
      <div className='hover:rotate-180 hover:scale-125 transform duration-200 cursor-pointer' onClick={ handleChangeDarkMode }>
        <LazyImage src={siteInfo?.icon} className='rounded-full' width={120} alt={BLOG.AUTHOR}/>
      </div>
      <div className='text-2xl font-serif dark:text-white py-2 hover:scale-105 transform duration-200'>{BLOG.AUTHOR}</div>
      <div className='font-light dark:text-white py-2 hover:scale-105 transform duration-200 text-center'>{BLOG.BIO}</div>
      <SocialButton/>
    </div>
  </>
}

export default InfoCard
