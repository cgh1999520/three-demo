import {HashRouter, Route} from "react-router-dom";
import Home from "../views/Home";
import Demo01 from "../views/Demo01";
import Demo02 from "../views/Demo02";
import Demo03 from "../views/Demo03";
import React from "react";

export default function Router() {
    return <HashRouter>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/demo1">
            <Demo01/>
        </Route>
        <Route path="/demo2">
            <Demo02/>
        </Route>
        <Route path="/demo3">
            <Demo03/>
        </Route>
    </HashRouter>
}
