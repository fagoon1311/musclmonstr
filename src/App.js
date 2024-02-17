import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainPage from './components/MainPage';
import Body from './components/Body';
import Login from './components/Login';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Layout from './components/Layout';
import { Auth0Provider } from '@auth0/auth0-react'



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
    <Auth0Provider
    domain="dev-egz6c26hmvfhulfq.us.auth0.com"
    clientId="DvTA5DF2prZu29oIREnH5O0AoE18HuLz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>

    </Auth0Provider>
  );
}

export default App;
