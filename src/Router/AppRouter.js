import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/Header";


const AppRouter = () => {

  return ( 
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Header/>}/>

   <Route path="*" element={<Navigate to = "/"/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
