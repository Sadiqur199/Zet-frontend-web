import {
  Link,
  createBrowserRouter,
} from "react-router-dom";
import img1 from '../assets/404page.jpg'
import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import About from "../About/About";

export const router = createBrowserRouter([
  {
    path:'*',
    element:<div className="w-full">
       <img className="mx-auto w-full"  src={img1} alt="" />
       <Link to='/'><button className='absolute right-0 mr-4 mt-[-55%] px-4 py-5 rounded bg-slate-500 text-white'>Back To Home </button></Link>
    </div>
   },
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  },
]);
