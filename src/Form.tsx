import React from "react";
import './styles/Form.css';

interface FormProps {
  teamHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    setDirty: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  ticketsHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stadiumHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  blurHandler: (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  firstTeam: string;
  firstTeamDirty: boolean;
  firstTeamError: string;
  secondTeam: string;
  secondTeamDirty: boolean;
  secondTeamError: string;
  setFirstTeam: React.Dispatch<React.SetStateAction<string>>;
  setFirstTeamDirty: React.Dispatch<React.SetStateAction<boolean>>;
  setFirstTeamError: React.Dispatch<React.SetStateAction<string>>;
  setSecondTeam: React.Dispatch<React.SetStateAction<string>>;
  setSecondTeamDirty: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondTeamError: React.Dispatch<React.SetStateAction<string>>;
  tickets: string;
  ticketsDirty: boolean;
  ticketsError: string;
  stadium: string;
  stadiumDirty: boolean;
  stadiumError: string;
  formValid: boolean;
  resetHandler: () => void;
  addButtonHandler: () => void;
}



const Form: React.FC<FormProps> = ({
  teamHandler,
  ticketsHandler,
  stadiumHandler,
  blurHandler,
  firstTeam,
  firstTeamDirty,
  firstTeamError,
  secondTeam,
  secondTeamDirty,
  secondTeamError,
  setFirstTeam,
  setFirstTeamDirty,
  setFirstTeamError,
  setSecondTeam,
  setSecondTeamDirty,
  setSecondTeamError,
  tickets,
  ticketsDirty,
  ticketsError,
  stadiumDirty,
  stadiumError,
  formValid,
  resetHandler,
  addButtonHandler,
}) => {

  return (
    <form action="" className="form-container">
      <label htmlFor="firstTeam">First Team:</label>
      {firstTeamDirty && firstTeamError && (
        <div style={{ color: "red", fontWeight: "bold" }}>
          {firstTeamError}
        </div>
      )}
      <input
        onChange={(e) =>
          teamHandler(
            e,
            setFirstTeam,
            setFirstTeamDirty,
            setFirstTeamError,
          )
        }
        onBlur={(e) => blurHandler(e)}
        value={firstTeam}
        name="firstTeam"
        type="text"
        className="input"
        id="firstTeam"
        placeholder="Enter first team..."
        required
      />
      <label htmlFor="secondTeam">Second Team:</label>
      {secondTeamDirty && secondTeamError && (
        <div style={{ color: "red", fontWeight: "bold" }}>
          {secondTeamError}
        </div>
      )}
      <input
        onChange={(e) =>
          teamHandler(
            e,
            setSecondTeam,
            setSecondTeamDirty,
            setSecondTeamError
          )
        }
        onBlur={(e) => blurHandler(e)}
        value={secondTeam}
        name="secondTeam"
        type="text"
        className="input"
        id="secondTeam"
        placeholder="Enter second team..."
        required
      />
      <label htmlFor="numberOfTickets">Tickets:</label>
      {ticketsDirty && ticketsError && (
        <div style={{ color: "red", fontWeight: "bold" }}>
          {ticketsError}
        </div>
      )}
      <input
        onChange={(e) => ticketsHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={tickets}
        name="tickets"
        type="number"
        className="input"
        id="numberOfTickets"
        placeholder="Enter the quantity of tickets..."
        required
      />
      <label htmlFor="stadium">Stadium:</label>
      {stadiumDirty && stadiumError && (
        <div style={{ color: "red", fontWeight: "bold" }}>
          {stadiumError}
        </div>
      )}
      <select
        name="stadium"
        id="stadium"
        className="input input_select"
        onChange={(e) => stadiumHandler(e)}
        onBlur={(e) => blurHandler(e)}
      >
        <option disabled>Choose Stadium:</option>
        <option value="">None</option>
        <option value="Parc Des Princes">Parc Des Princes</option>
        <option value="Camp Nou">Camp Nou</option>
      </select>
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