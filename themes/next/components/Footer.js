import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative z-10 dark:bg-gray-800 flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 bg-white dark:text-gray-400'
        >

            <span>
                <i className='fas fa-copyright' /> {`${copyrightDate}`} <span className='mx-1 animate-pulse'><i className='fas fa-heart' /></span> <a href={siteConfig('LINK')} className='underline font-bold '>{siteConfig('AUTHOR')}</a>.<br />

                {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br /></>}
            </span>
        </footer>
  )
}

export default Footer
