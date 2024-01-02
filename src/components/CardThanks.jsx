import React from "react";
import iconComplete from "../assets/icon-complete.svg";

const CardThanks = () => {
  const handleContinueClick = () => {
    window.location.reload();
  };

  return (
    <div className="card-thanks">
      <div className="card-thanks__wrapper">
        <img className="icon-complete" src={iconComplete} alt="icon complete" />
        <h2>Thank You!</h2>
        <p>We've added your card details</p>
        <button onClick={handleContinueClick} aria-label="Continue">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CardThanks;
