import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./views/dashboard/DashboardView";
import NotFound from "./views/not-found/NotFound";
import Authorization from "./views/authorization/authorization";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/authenticate" element={<Authorization />} />
          <Route path="dashboard/:room" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
