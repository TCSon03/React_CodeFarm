import { ToastContainer } from "react-toastify";
import Routes from "./router";
import { toastContainerConfig } from "./utils/toastConfig";

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer {...toastContainerConfig} />
    </div>
  );
}

export default App;
