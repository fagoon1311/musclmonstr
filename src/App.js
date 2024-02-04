import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainPage from './components/MainPage';
import Body from './components/Body';
import About from './components/About';
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
        path:'about',
        element:<About />
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
