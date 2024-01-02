import "../styles/CardCredit.css";

const CardCredit = ({ formData }) => {
  return (
    <div className="card">
      <div className="card__front">
        <span>{formData.number || "0000 0000 0000 0000"}</span>
        <div className="card__info">
          <span>{formData.name || "Jane Appleseed"}</span>
          <span>{`${formData.mm || "00"}/${formData.yy || "00"}`}</span>
        </div>
      </div>

      <div className="card__back">
        <span>{formData.cvc || "000"}</span>
      </div>
    </div>
  );
};

export default CardCredit;
