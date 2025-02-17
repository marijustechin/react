import { RouterProvider } from "react-router-dom";
import { router } from "./components/utils/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
