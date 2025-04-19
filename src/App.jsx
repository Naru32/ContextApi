import './App.css'
import Child from './Child'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Child/>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
