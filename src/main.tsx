import ReactDOM from "react-dom/client";
import { NavigateRoutes } from "./routes";
import GlobalStyles from "./styles/global";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <NavigateRoutes />
    <GlobalStyles />
    <ToastContainer />
  </>
);
