import "../styles/CardForm.css";
import "../styles/App.css";

const CardForm = ({ setFormData, formData, handleSubmit }) => {
  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    if (name === "number") {
      const numericValue = value.replace(/[^0-9]/g, "");
      e.target.value = numericValue
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }
    if (name === "mm" || name === "yy") {
      const numericValue = value.replace(/[^0-9]/g, "");
      e.target.value = numericValue.substring(0, 2);
    }
    if (name === "cvc") {
      const numericValue = value.replace(/[^0-9]/g, "");
      e.target.value = numericValue.slice(0, 3);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main>
    <form className="card__form" onSubmit={handleSubmit}>
      <div className="card__form__container">
        <label className="label__name">Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="name"
          className="card__input"
          onChange={handleInputChange}
        />
        <label className="label__number">Card Number</label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
          className={formData.number.length <= 18 && formData.number.length >= 1 ? "input__error" : "card__input"}
          maxLength={19}
          onChange={handleInputChange}
        />
        {formData.number.length <= 18 && formData.number.length >= 1 ? (
          <p className="info" aria-live="polite">
            Please enter all digits of your card
          </p>
        ) : (
          ""
        )}

        <div className="card__cvc-mmyy">
          <label className="label__mm label__yy">
            Exp. Date (MM/YY)
            <div>
              <input
                type="text"
                placeholder="MM"
                name="mm"
                className={formData.mm.length === 1 ? 'input__error' : 'card__input'}
                onChange={handleInputChange}
                maxLength={2}
              />
              <input
                type="text"
                placeholder="YY"
                name="yy"
                className={formData.yy.length === 1 ? 'input__error' : 'card__input'}
                onChange={handleInputChange}
                maxLength={2}
              />
            </div>
          </label>
          <p className="info" aria-live="polite"></p>

          <label className="label__cvc">
            CVC
            <input
              type="text"
              placeholder="e.g. 123"
              name="cvc"
              className={formData.cvc.length === 2 || formData.cvc.length === 1 ? 'input__error' : 'card__input'}
              onChange={handleInputChange}
              maxLength={3}
            />
          </label>
          <p className="info" aria-live="polite"></p>
        </div>
        <div className="mm-yy__wrapper">
          {formData.mm.length === 1 || formData.yy.length === 1 ? (
            <p className="info" aria-live="polite">
              Can't be blank
            </p>
          ) : (
            ""
            )}
            {formData.cvc.length >= 1 && formData.cvc.length < 3 ? (
              <p className="info cvc" aria-live="polite">
                Can't be blank
              </p>
            ) : (
              ""
            )}
        </div>
        <button type="submit" className="btn__submit" aria-label="Submit form">
          Confirm
        </button>
      </div>
    </form>
    </main>
  );
};

export default CardForm;
