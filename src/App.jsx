import "./App.css";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cities from './pages/Cities'
import Error404 from './pages/Error404'
import CitiesDetails from "./pages/CitiesDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout/>,
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
      }
    ]
  },
  {
    path: '*',
    element: <Error404/>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
