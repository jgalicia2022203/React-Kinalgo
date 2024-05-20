import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
function App() {
  return (
    <div className="App w-full h-full">
      <AppRoutes />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default App;
