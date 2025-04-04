import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Note from './Pages/Note/Note';
import AuthContextProvider from './Contexts/AuthContext/AuthContext';
import SignUp from './Pages/SignUp/SignUp';



function App() {
const router =  createBrowserRouter([
    {path:"" , element: <MainLayout/> , children:[
      {index:true , element:<Home/>},      
      {path:"login" , element:<Login/>},
      {path:"signup", element:<SignUp/>},
      {path:"*" , element:<NotFound/>},
    ]}
  ])

  return (
    <>
    <AuthContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
    
    </>
  )
}

export default App
