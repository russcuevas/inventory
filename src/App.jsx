import { Routes, Route } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Users from './admin/Users';
import Inventory from './admin/Inventory';
import Reports from './admin/Reports';
import Orders from './admin/Orders';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path='/orders' element={<Orders />}></Route>
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;
