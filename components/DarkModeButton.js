import { useGlobal } from '@/lib/global'
import { saveDarkModeToCookies } from '@/themes/theme'

const DarkModeButton = () => {
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

  return <i id='darkModeButton' className={`hover:scale-125 cursor-pointer transform duration-200 fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
       onClick={handleChangeDarkMode} />
}
export default DarkModeButton
