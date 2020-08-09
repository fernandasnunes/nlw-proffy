import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" componente={Landing} />
      <Route path="/study" componente={TeacherList} />
      <Route path="/give-classes" componente={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
