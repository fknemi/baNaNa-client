import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Make sure you import from react-router-dom, not just 'react-router'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout';
import ProtectedLayout from './components/protectedLayout';
const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout children={<Home />
                } />} />
                <Route path="/login"
                    element={<Layout children={<Home />}

                    />} />
                <Route path="/dashboard"
                    element={<ProtectedLayout children={<Dashboard />}

                    />} />

            </Routes>
        </BrowserRouter>
    </StrictMode>
);

