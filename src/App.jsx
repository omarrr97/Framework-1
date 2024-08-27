import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portofolio from './Components/Portofolio/Portofolio'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Start from './Components/Start framework/Start'
import Error from './Components/Error/Error'

let routers = createBrowserRouter([{
  path:'',element:<Layout/>,children:[
    {index:true, element :<Start/>},
    {path:'about', element :<About/>},
    {path:'contact', element :<Contact/>},
    {path:'portofolio', element :<Portofolio/>},
    {path:'*',element:<Error/>},
  ]
}])


function App() {
  return <RouterProvider router={routers}></RouterProvider>    
}

export default App
