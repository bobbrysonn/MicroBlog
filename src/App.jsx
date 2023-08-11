import ApiProvider from "./contexts/ApiProvider";
import Header from "./components/header";
import ExplorePage from "./pages/ExplorePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        {/* Persistent stuff */}
        <Header />
        {/* All possible routes */}
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}
