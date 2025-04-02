import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Note from './Pages/Note/Note';



function App() {
const router =  createBrowserRouter([
    {path:"" , element: <MainLayout/> , children:[
      {index:true , element:<Home/>},
      {path:"note" , element:<Note/>},
      {path:"login" , element:<Login/>},
      {path:"signup", element:<SignUp/>},
      {path:"*" , element:<NotFound/>},
    ]}
  ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
