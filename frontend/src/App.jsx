import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Home from "./pages/Home";


const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Rootlayout /> }>
      <Route index element={ <Home /> } />
      
    </Route>
  ));
  return <RouterProvider router={router}/>
}
  

export default App;
