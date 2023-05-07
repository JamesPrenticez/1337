import { useEffect, useState } from "react"
import useMedia from "./useMedia"

const useDarkMode = ():void => {
  const [theme, setTheme] = useState(localStorage.theme)
	const browserPreference = useBrowserPreferenceDarkMode()
	const colorTheme = typeof theme !== "undefined" ? theme : browserPreference

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    //Set Attribute on root div
    document.documentElement.setAttribute("data-theme", theme)
    
    //Save theme to local storage
    localStorage.setItem('theme', theme)

  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}

function useBrowserPreferenceDarkMode(){
  return useMedia(["(prefers-color-scheme: dark)"], ["dark"], "light");
}

export default useDarkMode

//https://omerduraker.medium.com/dark-and-light-mode-using-react-tailwind-css-58bb8f988080
//https://usehooks.com/useDarkMode/