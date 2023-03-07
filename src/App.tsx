import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="h-screen bg-slate-500">
      <Header />

      <div className="h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
