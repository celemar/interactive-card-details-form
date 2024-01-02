import React, { useState } from "react";

import "./styles/App.css";
import CardCredit from "./components/CardCredit";
import CardForm from "./components/CardForm";
import CardThanks from "./components/CardThanks";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.number.trim().length === 19 &&
      formData.mm.trim().length === 2 &&
      formData.yy.trim().length === 2 &&
      formData.cvc.trim().length === 3
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
      const submitBtn = document.getElementById;
    }
    setHasSubmitted(true);
  };

  return (
    <main>
      <div className="container">
        <div className="card-credit__wrapper">
          <CardCredit formData={formData} />
        </div>
        <div className="card-form__wrapper">
          {isFormValid ? (
            <CardThanks />
          ) : (
            <CardForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          )}
          {!isFormValid && hasSubmitted && (
            <div className="invalid-form__wrapper">
              <p className="invalid-form">Please fill in all fields</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
