import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage.jsx";
import { AllStudents } from "./AllStudents.jsx";
import{NewStudent} from "./NewStudent";
import { useState } from "react";

function StudentRoutes() {


    return (
        <Routes>
            <Route path={"/"} element={<FrontPage />}></Route>
            <Route
                path={"/students"}
                element={<AllStudents/>}
            ></Route>
            <Route
                path={"/students/new"}
                element={<NewStudent />}
            ></Route>
        </Routes>
    );
}

export function StudentApplication() {
    return (
        <BrowserRouter>
            <header>
                <h2>Student Data App</h2>
            </header>
            <nav>
                <Link to={"/"}>FrontPage</Link>
            </nav>
            <main>
                <StudentRoutes />
            </main>
            <footer>Made By Jovana Spasenic & Johan Svendsen 😎</footer>
        </BrowserRouter>
    );
}