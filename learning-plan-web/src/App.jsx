import React from "react";
import "./app.css";
import { PlanForm, PlanFormList, Title, PlanContextProvider, studyingImg, Footer } from "./index";

const App = () => {

  return (
    <div className="App">
      <PlanContextProvider>
        <Title />
        <PlanForm />
        <div className="content">
          <img 
            src={studyingImg} 
            alt="Young man studying"
          />
          <PlanFormList />
        </div>
        <Footer />
      </PlanContextProvider>
    </div>
  )
}

export default App;
