import React, { useEffect, useState } from "react";
import "./component styles/Form.css";
import {
  Button,
  Typography,
  MenuItem,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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
    const { firstTeamError, secondTeamError, ticketsError, stadiumError } =
      formState;
    if (firstTeamError || secondTeamError || ticketsError || stadiumError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formState]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#000",
        light: "#333"
      },
    },
    spacing: 5,
  });

  return (
    <form className="form-container">
      <ThemeProvider theme={theme}>
        <TextField
          id="firstTeam"
          label="First Team:"
          variant="standard"
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={formState.firstTeam}
          name="firstTeam"
          type="text"
          placeholder="Enter first team..."
          sx={{
            marginBottom: theme.spacing(6),
            width: theme.spacing(60),
            height: theme.spacing(5),
            borderRadius: theme.spacing(1)
          }}
        />
        {formState.firstTeamDirty && formState.firstTeamError && (
          <Typography sx={{ color: "red", fontWeight: "bold", fontSize: theme.spacing(2.6) }}>
            {formState.firstTeamError}
          </Typography>
        )}
        <TextField
          id="secondTeam"
          label="Second Team:"
          variant="standard"
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={formState.secondTeam}
          name="secondTeam"
          type="text"
          className="input"
          placeholder="Enter second team..."
          sx={{
            marginBottom: theme.spacing(6),
            width: theme.spacing(60),
            height: theme.spacing(5),
            borderRadius: theme.spacing(1)
          }}
        />
        {formState.secondTeamDirty && formState.secondTeamError && (
          <Typography sx={{ color: "red", fontWeight: "bold", fontSize: theme.spacing(2.6) }}>
            {formState.secondTeamError}
          </Typography>
        )}
        <TextField
          id="numberOfTickets"
          label="Tickets:"
          variant="standard"
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={formState.tickets}
          name="tickets"
          type="number"
          className="input"
          placeholder="Enter the quantity of tickets..."
          sx={{
            marginBottom: theme.spacing(6),
            width: theme.spacing(60),
            height: theme.spacing(5),
            borderRadius: theme.spacing(1)
          }}
        />
        {formState.ticketsDirty && formState.ticketsError && (
          <Typography sx={{ color: "red", fontWeight: "bold", fontSize: theme.spacing(2.6) }}>
            {formState.ticketsError}
          </Typography>
        )}
        <TextField
          id="stadium"
          select
          label="Stadium:"
          variant="standard"
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={formState.stadium}
          name="stadium"
          className="input"
          placeholder="Choose Stadium..."
          sx={{
            marginBottom: theme.spacing(6),
            width: theme.spacing(60),
            height: theme.spacing(5),
            borderRadius: theme.spacing(1),
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Parc des Princes"}>Parc des Princes</MenuItem>
          <MenuItem value={"Camp Nou"}>Camp Nou</MenuItem>
        </TextField>
        {formState.stadiumDirty && formState.stadiumError && (
          <Typography sx={{ color: "red", fontWeight: "bold", fontSize: theme.spacing(2.6) }}>
            {formState.stadiumError}
          </Typography>
        )}
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button
            type="reset"
            variant="outlined"
            onClick={resetHandler}
            sx={{
              borderRadius: theme.spacing(1.5),
              fontSize: theme.spacing(2.4),
              marginTop: theme.spacing(5),
              height: theme.spacing(5.2),
              width: theme.spacing(20),
              color: "secondary.main",
              border: 1,
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            Reset
          </Button>
          <Button
            type="button"
            disabled={!formValid}
            onClick={handleAddButtonClick}
            sx={{
              borderRadius: theme.spacing(1.5),
              fontSize: theme.spacing(2.4),
              marginTop: theme.spacing(5),
              height: theme.spacing(5.2),
              width: theme.spacing(20),
              color: "secondary.main",
              border: 1,
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            <span className="button-content">Add</span>
          </Button>
        </Grid>
      </ThemeProvider>
    </form>
  );
};

export default Form;
