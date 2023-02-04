import ReactDOM from "react-dom/client";
import { NavigateRoutes } from "./routes";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <NavigateRoutes />
    <GlobalStyles />
  </>
);
