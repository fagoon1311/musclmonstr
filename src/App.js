import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainPage from './components/MainPage';
import Body from './components/Body';
import Login from './components/Login';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Layout from './components/Layout';



const appRouter = createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[
  {
    path:'/',
    render:<Body />,
    children:[
      {
        path:'/',
        element:<MainPage />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'gallery',
        element:<Gallery />
      },
      {
        path:'contact',
        element:<ContactUs />
      }
    ]
  }]}
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
