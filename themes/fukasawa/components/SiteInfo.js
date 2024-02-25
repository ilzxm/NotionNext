import { siteConfig } from '@/lib/config'

function SiteInfo ({ title }) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative leading-6 justify-start w-full text-gray-600 dark:text-gray-300 text-xs '
        >
            <span> © {`${copyrightDate}`} <span> <a href={siteConfig('LINK')}> <i className='mx-1 animate-pulse fas fa-heart'/> {siteConfig('AUTHOR')}</a>. <br /></span>
            {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}
            <br /></span>
            <h1>{title}</h1>
        </footer>
  )
}
export default SiteInfo
