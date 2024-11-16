import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />}/>
          <Route path="tasks" element={<Tasks />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
