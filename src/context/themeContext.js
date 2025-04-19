// we have seen ways to create context api and provider
//! this is also one of the way to create context api and provider and use them this is better approach to write production ready code
import {createContext,useContext} from "react"

// steps are same but that we are doing everything in one file

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: ()=> {},
    lightMode : ()=> {},
}) // step1 : create context api
// createContext() defines the expected shape of the context, but the real values must come from the Provider.
// Child components depend on those real values — not the default blueprint — unless no Provider is present.

// step2 create provider and export it so we can just write <ThemeProvider></ThemeProvider> and wrap components that need the context data
export const ThemeProvider = ThemeContext.Provider

// now we can optimize our code by defining custom hook to use this context api in files
// in the previous approaches we have need to import 2 files one for context api and one is useContext hook so it makes code look messy
// in this approach we just need to call that custom hook so our useContext get exported along with create context

export default function useTheme(){
    return useContext(ThemeContext)
}
