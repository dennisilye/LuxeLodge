import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import NewUsers from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<NewUsers />} />
          <Route path="settings" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
