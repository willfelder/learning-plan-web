import React from "react";
import "./app.css";
import PlanForm from "./components/planform/PlanForm";
import PlanFormList from "./components/planformlist/PlanFormList";
import Title from "./components/title/Title";
import PlanContextProvider from "./context/PlanContext";
import studyingImg from "./assets/studying-figure.png";
import Footer from "./components/footer/Footer";

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
