import AuthpageFullScreen from '../components/auth/Authpagefullscreen.jsx';
import Navbar from '../components/layout/index.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Approute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/login" element={<AuthpageFullScreen />} />
            </Routes>
        </Router>
    );
};

export default Approute;