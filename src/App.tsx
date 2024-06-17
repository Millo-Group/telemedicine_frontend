import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./views/dashboard/DashboardView";
import NotFound from "./views/not-found/NotFound";
import Authorization from "./views/authorization/authorization";
import PatientVideoCallView from './views/patient/video-call/PatientVideoCallView'
import PatientChatView from "./views/patient/chat/PatientChatView";
import PatientDashboardView from "./views/patient/dashboard/PatientDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/authenticate" element={<Authorization />} />
          <Route element={<MainLayout />}>
          <Route path="/patient-chat/:room" element={< PatientChatView/>}/>
          <Route path="/patient-dashboard" element={< PatientDashboardView/>}/>
          <Route path="dashboard/:room" element={<Dashboard />} />
          </Route>
          <Route path="/patient-videocall/:room" element={<PatientVideoCallView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
