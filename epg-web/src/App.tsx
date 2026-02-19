import './App.css'
import Login from './pages/Auth/Login'
import BgLogin from './assets/bg-login-register.png'

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
    style={{backgroundImage: `url(${BgLogin})`}}>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-[80vh] w-[30vw] min-w-[480px] max-h-[100vh] flex items-center justify-center">
        <Login />
      </div>
    </div>
  )
}

export default App
