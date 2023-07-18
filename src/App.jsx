import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
    return (
        <BrowserRouter>
            {/* Persistent stuff */}
            <Header />
            
            {/* All possible routes */}
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}