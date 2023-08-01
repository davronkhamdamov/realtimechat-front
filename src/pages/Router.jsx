import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Home";
import RootLayout from "./layout/layout";
import ChatPage from "./ChatPage";

const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="chat" element={<ChatPage />} />
    </Route>
  )
);
export default rout;
