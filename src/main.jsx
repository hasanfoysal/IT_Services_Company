import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import Services from './Components/Services/Services';
import Ceo from './Components/Ceo/Ceo';
import WhyChooseLMGroup from './Components/WhyChooseLMGroup/WhyChooseLMGroup';
import TeamMembers from './Components/TeamMembers/TeamMembers';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/service',
        element:<Services></Services>
      },
      {
        path: '/ceo',
        element: <Ceo></Ceo>
      },
      {
        path:'/why',
        element: <WhyChooseLMGroup></WhyChooseLMGroup>
      },
      {
        path: '/team',
        element:<TeamMembers></TeamMembers>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
