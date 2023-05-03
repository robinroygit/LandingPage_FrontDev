
import './App.css'
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact" 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'
import Error from './Error'
import Gototop from './Components/Gototop'


function App() {

  const theme ={
    colors:{
      heading:"black",
      text:"rgb(24 24 29)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249 249 255)",
      footer_bg:"#0a1435",
      btn:"rgb(90 84 243)",
      border:"rgba(98,84,243, 0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%",
      shadow:"rgba(0,0,0, 2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 3px 1px",
      shadowSupport:"0 1.5rem 1.5rem 0 rgb(132 144 255 /30% )",
    },

    media:{ mobile:"768px", tab:"998px" },
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

    <BrowserRouter>
    <Header/>
  <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/services' element={<Services/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='*' element={<Error/>} />
  </Routes>
  <Gototop/>
  <Footer/>
    </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
