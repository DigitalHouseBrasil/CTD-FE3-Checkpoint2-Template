import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Detail from "./Detail";
import NotFound from "./NotFound";          
import { DefaultLayout } from "../layouts/DefaultLayout";

export function RouteList() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/MatriculaDoDentista' element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}