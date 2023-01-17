import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home'
import Detail, { loader as DetailLoader } from './routes/Detail'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "detail/:businessId",
      loader: DetailLoader,
      element: <Detail />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
