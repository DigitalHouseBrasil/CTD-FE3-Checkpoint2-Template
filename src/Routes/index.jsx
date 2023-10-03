import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { DefaultLayout } from "../layouts/DefaultLayout";
import {AppContextProvider} from '../contexts/AppContext';

export function RouteList() {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <Routes>
                    <Route path='/' element={<DefaultLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path='/MatriculaDoDentista' element={<Detail />} />
                    </Route>
                </Routes>
            </AppContextProvider>
        </BrowserRouter>
    )
}