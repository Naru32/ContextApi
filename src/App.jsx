import { useEffect, useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import { ThemeProvider } from "./context/themeContext"

function App() {
  // we have just defined the default values in context api but to send it through provider we need to declare same variables and functions here in app.jsx
// to send data using provider to the child components(card and button) that is present in context api we need to declare first
 const [themeMode, setThemeMode] = useState("light")
// this function will set state to dark
 const darkMode = ()=> {
    setThemeMode("dark")  
 }
//this will set the state to light
 const lightMode = ()=> {
  setThemeMode("light")  
 }

// define how the mode will be change when button clicked
useEffect(()=> {
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
      </ThemeProvider>
  )
}

export default App
