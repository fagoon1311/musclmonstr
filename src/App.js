import './App.css';
import Head from './components/Head';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainPage from './components/MainPage';
import Body from './components/Body';
import About from './components/About';

const appRouter = createBrowserRouter([
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
      }
    ]
  }
])



function App() {
  return (
    <div className="App">
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
