import "./App.css";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cities from './pages/Cities'
import Error404 from './pages/Error404'
import CitiesDetails from "./pages/CitiesDetails";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authenticate } from "./redux/actions/authActions";
import ProtectedRoute from "./layouts/ProtectedRoute";
import MainLayoutAnon from "./layouts/MainLayoutAnon";
import ProtectedLayout from "./layouts/ProtectedLayout";
import ProtectedLayoutAnon from "./layouts/ProtectedLayoutAnon";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayoutAnon/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/cities',
        element: <Cities/>,
      },
      {
        path: '/cities/:_id',
        element: <CitiesDetails/>,
      },
      {
        path: '/login',
        element: <ProtectedRoute><Login/></ProtectedRoute>,
      },
      {
        path: '/signup',
        element: <ProtectedRoute><Signup/></ProtectedRoute>,
      }
    ]
  },
  {
    path: '*',
    element: <Error404/>
  }
])

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(authenticate())
  },[])

  // useGoogleOneTapLogin({
  //   onSuccess: credentialResponse => {
  //     console.log(credentialResponse)
  //   },
  //   onError: ()=>{
  //     console.log("Login failed")
  //   }
  // })

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
