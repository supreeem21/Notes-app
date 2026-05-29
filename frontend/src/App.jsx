
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div className="relative h-full w-full" data-theme="forest">
      <Outlet />
    </div>
  );
};

export default App;
