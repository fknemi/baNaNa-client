import "../index.css"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from "./components/providers";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout';
import CitySelect from "./pages/city-select/CitySelect";
import Invoice from "./pages/invoice/Invoice";
import Movie from "./pages/movie/Movie";
import Notifications from "./pages/notifications/Notifications";
import NowPlaying from "./pages/now-playing/NowPlaying";
import ComingSoon from "./pages/coming-soon/ComingSoon";
import SelectSeats from "./pages/select-seats/SelectSeats";
import Support from "./pages/support/Support";
import Ticket from "./pages/ticket/Ticket";
import YourTickets from "./pages/your-tickets/YourTickets";
import ProtectedLayout from './components/protectedLayout';
import Logout from "./pages/logout/Logout";

const root = createRoot(document.getElementById('root'));

root.render(

    <StrictMode>
        <Providers>
            <Routes>
                <Route path="/" element={<Layout children={<Home />
                } />} />
                <Route path="/login"
                    element={<ProtectedLayout><Login /> </ProtectedLayout>}

                />
                <Route path="/dashboard"
                    element={<ProtectedLayout><Dashboard /> </ProtectedLayout>}

                />

                <Route path="/city-select"
                    element={<Layout children={<CitySelect />}

                    />} />
                <Route path="/invoice"
                    element={<ProtectedLayout><Invoice /> </ProtectedLayout>}

                />
                <Route path="/notifications"
                    element={<ProtectedLayout><Notifications /> </ProtectedLayout>}

                />
                <Route path="/now-playing"
                    element={<Layout children={<NowPlaying />}

                    />} />
                <Route path="/coming-soon"
                    element={<Layout children={<ComingSoon />}

                    />} />
                <Route path="/select-seats/:id"
                    element={<SelectSeats />}

                />
                <Route path="/ticket/:id"
                    element={<Layout children={<Ticket />}

                    />} />
                <Route path="/your-tickets"
                    element={<ProtectedLayout><YourTickets /> </ProtectedLayout>}

                />
                <Route path="/movie/:id"
                    element={<Layout children={<Movie />} />}
                />
                <Route path="/support"
                    element={<Layout children={<Support />} />}
                />
                <Route path="/logout"
                    element={<Layout children={<Logout />} />}
                />
            </Routes>
        </Providers>
    </StrictMode>
);

