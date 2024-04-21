// Form.tsx
import React from "react";
import './component styles/Form.css';

interface FormProps {
  formState: {
    firstTeam: string;
    secondTeam: string;
    tickets: string;
    stadium: string;
    firstTeamDirty: boolean;
    secondTeamDirty: boolean;
    ticketsDirty: boolean;
    stadiumDirty: boolean;
    firstTeamError: string;
    secondTeamError: string;
    ticketsError: string;
    stadiumError: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formValid: boolean;
  resetHandler: () => void;
  addButtonHandler: () => void;
}

const Form: React.FC<FormProps> = ({
  formState,
  handleInputChange,
  handleBlur,
  formValid,
  resetHandler,
  addButtonHandler,
}) => {

  return (
    <form className="form-container">
      <label htmlFor="firstTeam">First Team:</label>
      <input
        onChange={(e) =>
          handleInputChange(e)
        }
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
        onChange={(e) =>
          handleInputChange(e)
        }
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
          onClick={addButtonHandler}
        >
          <span className="button-content">Add</span>
        </button>
      </div>
    </form>
  );
};

export default Form;

