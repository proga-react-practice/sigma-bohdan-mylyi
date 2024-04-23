import React, { useEffect, useState } from "react";
import './component styles/Form.css';

interface FormProps {
  addButtonHandler: (block: Block) => void;
}

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

const Form: React.FC<FormProps> = ({ addButtonHandler }) => {
  const [formState, setFormState] = useState({
    firstTeam: "",
    secondTeam: "",
    tickets: "",
    stadium: "",
    firstTeamDirty: false,
    secondTeamDirty: false,
    ticketsDirty: false,
    stadiumDirty: false,
    firstTeamError: "Input can not be empty!",
    secondTeamError: "Input can not be empty!",
    ticketsError: "Input can not be empty!",
    stadiumError: "Input can not be empty!",
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const {
      firstTeamError,
      secondTeamError,
      ticketsError,
      stadiumError,
    } = formState;
    if (firstTeamError || secondTeamError || ticketsError || stadiumError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formState]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "tickets" && parseInt(value) < 0) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        [`${name}Dirty`]: true,
        [`${name}Error`]: "Quantity of tickets cannot be negative!",
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        [`${name}Dirty`]: true,
        [`${name}Error`]: value ? "" : "Input can not be empty!",
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [`${name}Dirty`]: true,
      [`${name}Error`]: value ? "" : "Input can not be empty!",
    }));
  };

  const resetHandler = () => {
    setFormState({
      firstTeam: "",
      secondTeam: "",
      tickets: "",
      stadium: "",
      firstTeamDirty: false,
      secondTeamDirty: false,
      ticketsDirty: false,
      stadiumDirty: false,
      firstTeamError: "Input can not be empty!",
      secondTeamError: "Input can not be empty!",
      ticketsError: "Input can not be empty!",
      stadiumError: "Input can not be empty!",
    });
  };

  const handleAddButtonClick = () => {
    const { firstTeam, secondTeam, tickets, stadium } = formState;
    if (formValid) {
      addButtonHandler({
        id: Date.now(),
        firstTeam,
        secondTeam,
        tickets,
        stadium,
      });
      resetHandler();
    }
  };

  return (
    <form className="form-container">
      <label htmlFor="firstTeam">First Team:</label>
      <input
        onChange={(e) => handleInputChange(e)}
        onBlur={(e) => handleBlur(e)}
        value={formState.firstTeam}
        name="firstTeam"
        type="text"
        className="input"
        id="firstTeam"
        placeholder="Enter first team..."
        required
      />
      {formState.firstTeamDirty && formState.firstTeamError && (
        <div style={{ color: "red", fontWeight: "bold", fontSize: "12px"}}>
          {formState.firstTeamError}
        </div>
      )}
      <label htmlFor="secondTeam">Second Team:</label>
      <input
        onChange={(e) => handleInputChange(e)}
        onBlur={(e) => handleBlur(e)}
        value={formState.secondTeam}
        name="secondTeam"
        type="text"
        className="input"
        id="secondTeam"
        placeholder="Enter second team..."
        required
      />
       {formState.secondTeamDirty && formState.secondTeamError && (
        <div style={{ color: "red", fontWeight: "bold", fontSize: "12px", marginBottom: "5px"}}>
          {formState.secondTeamError}
        </div>
      )}
      <label htmlFor="numberOfTickets">Tickets:</label>
      <input
        onChange={(e) => handleInputChange(e)}
        onBlur={(e) => handleBlur(e)}
        value={formState.tickets}
        name="tickets"
        type="number"
        className="input"
        id="numberOfTickets"
        placeholder="Enter the quantity of tickets..."
        required
      />
      {formState.ticketsDirty && formState.ticketsError && (
        <div style={{ color: "red", fontWeight: "bold", fontSize: "12px", marginBottom: "5px"}}>
          {formState.ticketsError}
        </div>
      )}
      <label htmlFor="stadium">Stadium:</label>
      <select
        name="stadium"
        id="stadium"
        className="input input_select"
        onChange={(e) => handleInputChange(e)}
        onBlur={(e) => handleBlur(e)}
      >
        <option disabled>Choose Stadium:</option>
        <option value="">None</option>
        <option value="Parc Des Princes">Parc Des Princes</option>
        <option value="Camp Nou">Camp Nou</option>
      </select>
      {formState.stadiumDirty && formState.stadiumError && (
        <div style={{ color: "red", fontWeight: "bold", fontSize: "12px",marginBottom: "5px"}}>
          {formState.stadiumError}
          </div>
  )}
  <div className="buttons">
    <button
      type="reset"
      className="buttonReset"
      onClick={resetHandler}
    >
      <span className="button-content">Reset</span>
    </button>
    <button
      type="button"
      className="buttonAdd"
      disabled={!formValid}
      onClick={handleAddButtonClick}
    >
      <span className="button-content">Add</span>
    </button>
  </div>
</form>
);
};

export default Form;