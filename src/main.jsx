import "../index.css"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Make sure you import from react-router-dom, not just 'react-router'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout';
import ProtectedLayout from './components/protectedLayout';
import { Auth0Provider } from '@auth0/auth0-react';
import { NextUIProvider } from '@nextui-org/react'
const root = createRoot(document.getElementById('root'));

root.render(

    <StrictMode>
        <NextUIProvider >

            <BrowserRouter>
                <Auth0Provider
                    domain="fknemi.eu.auth0.com"
                    clientId="huus5XI7136UMBwctpwnKzFOewWG5pkU"
                    authorizationParams={{
                        redirect_uri: window.location.origin + "/dashboard"
                    }}>

                    <Routes>
                        <Route path="/" element={<Layout children={<Home />
                        } />} />
                        <Route path="/login"
                            element={<Layout children={<Home />}

                            />} />
                        <Route path="/dashboard"
                            element={<ProtectedLayout><Dashboard /> </ProtectedLayout>}

                        />
                    </Routes>
                </Auth0Provider>
            </BrowserRouter>
        </NextUIProvider>

    </StrictMode>
);

