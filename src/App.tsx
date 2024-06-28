import "./App.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./views/dashboard/DashboardView";
import NotFound from "./views/not-found/NotFound";
import Authorization from "./views/authorization/authorization";
import PatientVideoCallView from './views/patient/video-call/PatientVideoCallView'
import PatientChatView from "./views/patient/chat/PatientChatView";
import PatientDashboardView from "./views/patient/dashboard/PatientDashboard";
import AppProvider, { useApp } from "./providers/AppProvider";

function ProtectedRoute(props: { role: 'patient' | 'doctor' }) {
  const { role } = props;
  const { employeeId, customerId } = useApp();
  if (role === 'doctor' && typeof employeeId !== 'number') {
    return <Navigate to="/" />
  }
  else if (role === 'patient' && typeof customerId !== 'number') {
    return <Navigate to="/" />
  }
  return <Outlet />
}
function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authorization />} />
            <Route path="/authenticate" element={<Authorization />} />
            <Route element={<ProtectedRoute role="doctor" />}>
              <Route element={<MainLayout />}>
                <Route path="dashboard/:room" element={<Dashboard />} />
              </Route>
            </Route>
            <Route element={<ProtectedRoute role="patient" />}>
              <Route path="/patient-chat" element={<PatientChatView />} />
              <Route path="/patient-dashboard" element={<PatientDashboardView />} />
              <Route path="/patient-videocall/:room" element={<PatientVideoCallView />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
