import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { Auth0Provider } from '@auth0/auth0-react';
import { NextUIProvider } from '@nextui-org/react'
import { RecoilRoot } from "recoil";
import { BrowserRouter } from 'react-router-dom';


function Providers({ children }) {


    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
                staleTime: 30000,
                refetchOnWindowFocus: false,
            },
        },
    });


return <NextUIProvider >
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Auth0Provider
                    domain="fknemi.eu.auth0.com"
                    clientId="huus5XI7136UMBwctpwnKzFOewWG5pkU"
                    authorizationParams={{
                        redirect_uri: window.location.origin
                    }}
                >
                    {children}

                </Auth0Provider>
            </RecoilRoot>
        </QueryClientProvider>
    </BrowserRouter>
</NextUIProvider>




}



export default Providers
