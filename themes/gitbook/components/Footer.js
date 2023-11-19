import { siteConfig } from '@/lib/config'

const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='z-20 py-2 bg:white dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative'
        >
            <hr className='pb-2' />

            <div className='flex justify-center'>
                <div><i className='mx-1 animate-pulse fas fa-heart' /> <a href={siteConfig('LINK')} className='underline font-bold text-gray-500 dark:text-gray-300 '>{siteConfig('AUTHOR')}</a>.<br /></div>
                © {`${copyrightDate}`}
            </div>
            {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br /></>}

        </footer>
  )
}

export default Footer
