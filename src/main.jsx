import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import ShopNow from './Page/ShopNow/ShopNow';
import Blog from './Page/Blogs/BlogComponents/Blog';
import Contract from './Page/Contract/Contract';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      { index: true, element: <Home/> },
      { path: "/about", element: <About/>},
      { path: "/blog", element: <Blog/>},
      { path: "/contact", element: <Contract/>},
      { path: "/shopnow", element: <ShopNow/>},
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,

);
