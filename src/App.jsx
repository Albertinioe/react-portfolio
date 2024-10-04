import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main, Posts, Search, Work, Profile} from "@/pages/index.js";
import React from "react";
import Wrapper from "@/layout/Wrapper.jsx";
import { SideBarProvider } from "@/providers/SideBarProvider.jsx";
import {SendModalProvider} from "@/providers/SendModalProvider.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className={'h-screen flex flex-row text-white'}>
                <SideBarProvider>
                    <SendModalProvider>
                        <Routes>
                            <Route element={<Wrapper/>} >
                                <Route index element={<Main/>} />
                                <Route path="/post/:id" element={<Posts/>} />
                                <Route path="/search/:text" element={<Search/>} />
                                <Route path="/work/" element={<Work/>} />
                                <Route path="/profile/" element={<Profile/>} />
                            </Route>
                        </Routes>
                    </SendModalProvider>
                </SideBarProvider>
            </div>
        </BrowserRouter>
    )
}

export default App
