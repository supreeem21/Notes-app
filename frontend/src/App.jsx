
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div data-theme="forest" className="h-screen">
      <Outlet />
    </div>
  );
};

export default App;
