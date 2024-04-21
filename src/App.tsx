// App.tsx
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import CardList from "./CardList";

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

const App: React.FC = () => {
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
  const [isVisible, setIsVisible] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);

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

  const addButtonHandler = () => {
    const { firstTeam, secondTeam, tickets, stadium } = formState;
    setBlocks([
      ...blocks,
      { id: Date.now(), firstTeam, secondTeam, tickets, stadium },
    ]);
    setIsVisible(true);
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

  const removeBlock = (id: number) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  return (
    <>
      <div className="page">
        <div className="container">
          <h2>Football Match Form</h2>
          <Form
            formState={formState}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            formValid={formValid}
            resetHandler={resetHandler}
            addButtonHandler={addButtonHandler}
          />
        </div>
        {isVisible && <CardList blocks={blocks} removeBlock={removeBlock} />}
      </div>
    </>
  );
};

export default App;
