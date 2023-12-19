import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Form from "./components/AdmissionForm"
import { Box } from "@mui/material";
import AdmissionForm from "./components/AdmissionForm";

const App=()=>(
    <BrowserRouter>
        <Box>
            <Routes>
                <Route path="/"  element={<AdmissionForm/>}/>
            </Routes>
        </Box>
        
    </BrowserRouter>
    // <div>
    //    <Form/>
    // </div>
);

export default App