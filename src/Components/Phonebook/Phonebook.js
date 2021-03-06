import { useState } from "react";
import PropTypes from "prop-types";
import s from "./Phonebook.module.css";

export default function PhoneBook({ submitForm }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;

    switch (e.target.name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    submitForm({ name, number });
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.ContainerForm} onSubmit={onSubmitForm}>
      <h2 className={s.Title}>Phonebook</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.Btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

PhoneBook.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
