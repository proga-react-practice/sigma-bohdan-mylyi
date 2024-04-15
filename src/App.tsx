import { useState } from 'react'
import './App.css'

function App() {
  const [firstTeam, setFirstTeam] = useState('');
  const [secondTeam, setSecondTeam] = useState('');
  const [firstTeamDirty, setFirstTeamDirty] = useState(false);
  const [secondTeamDirty, setSecondTeamDirty] = useState(false);
  const [firstTeamError, setFirstTeamError] = useState('Input can not be empty!');
  const [secondTeamError, setSecondTeamError] = useState('Input can not be empty!');
  const [tickets, setTickets] = useState('');
  const [ticketsDirty, setTicketsDirty] = useState(false);
  const [ticketsError, setTicketsError] = useState('Input can not be empty!');
  const [stadium, setStadium] = useState('');
  const [stadiumDirty, setStadiumDirty] = useState(false);
  const [stadiumError, setStadiumError] = useState('Input can not be empty!');


  const teamHandler = (e, setTeam, setDirty, setError) => {
    const value = e.target.value;
    setTeam(value);
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    setDirty(true)
    if (invalidChars.test(value)) {
      setError('The name of the team must consist only of letters or numbers!');
    } else {
      setError('');
    }
  };

  const ticketsHandler = (e) => {
    const value = e.target.value;
    setTickets(value)
    setTicketsDirty(true)
    if(value < 0) {
      setTicketsError('Quantity of tickets can not be negative!')
    } else {
      setTicketsError('');
    }
  }

  const stadiumHandler = (e) => {
    const value = e.target.value;
    setStadium(value)
    setStadiumDirty(true)
    if(!value) {
      setStadiumError('Please, choose the stadium!')
    } else {
      setStadiumError('')
    }
  }
  

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'firstTeam':
        setFirstTeamDirty(true);
        if (!firstTeam) {
          setFirstTeamError('Input can not be empty!');
        }
        break;
      case 'secondTeam':
        setSecondTeamDirty(true);
        if (!secondTeam) {
          setSecondTeamError('Input can not be empty!');
        }
        break;
      case 'tickets':
        setTicketsDirty(true);
        if (!tickets) {
          setTicketsError('Input can not be empty!');
        }
        break;
      case 'stadium':
        setStadiumDirty(true);
        if (!stadium) {
          setStadiumError('Please, choose the stadium!');
        }
        break;
    }
  }

  const resetHandler = () => {
    setFirstTeam('')
    setFirstTeamError('')
    setSecondTeam('')
    setSecondTeamError('')
    setTickets('')
    setTicketsError('')
    setStadium('')
    setStadiumError('')
  }

  return (
    <>
      <div className="container">
        <h2>Football Match Form</h2>
        <form action="" className='form-container'>
        <label htmlFor="firstTeam">First Team:</label>
        {firstTeamDirty && firstTeamError && <div style={{ color: 'red', fontWeight: 'bold'}}>{firstTeamError}</div>}
          <input onChange={(e) => teamHandler(e, setFirstTeam, setFirstTeamDirty, setFirstTeamError)}
            onBlur={e => blurHandler(e)}
            value={firstTeam}
            name='firstTeam'
            type="text"
            className='input'
            id='firstTeam'
            placeholder='Enter first team...' 
            required/>
        <label htmlFor="secondTeam">Second Team:</label>
        {secondTeamDirty && secondTeamError && <div style={{ color: 'red', fontWeight: 'bold'}}>{secondTeamError}</div>}
      <input
          onChange={(e) => teamHandler(e, setSecondTeam, setSecondTeamDirty, setSecondTeamError)}
          onBlur={e => blurHandler(e)}
          value={secondTeam}
          name='secondTeam'
          type="text"
          className='input'
          id='secondTeam'
          placeholder='Enter second team...' 
          required
      />
        <label htmlFor="numberOfTickets">Tickets:</label>
        {(ticketsDirty && ticketsError) && <div style={{color: 'red', fontWeight: 'bold'}}>{ticketsError}</div>}
          <input
          onChange={e => ticketsHandler(e)} 
          onBlur={e => blurHandler(e)}
          value={tickets} 
          name='tickets' 
          type="number" 
          className='input' 
          id='numberOfTickets'
          placeholder='Enter the quantity of tickets...' 
          required/>
        <label htmlFor="stadium">Stadium:</label>
        {(stadiumDirty && stadiumError) && <div style={{color: 'red', fontWeight: 'bold'}}>{stadiumError}</div>}
          <select name="stadium" id="stadium" className='input input_select' onChange={e => stadiumHandler(e)} onBlur={e => blurHandler(e)}>
            <option disabled>Choose Stadium:</option>
            <option value="">None</option>
            <option value="Santiago Bernabeu">Santiago Bernabeu</option>
            <option value="Camp Nou">Camp Nou</option>
          </select>
          <div className="buttons">
            <button type='reset' className='button' onClick={resetHandler}>Reset</button>
            <button type='submit' className='button'>Add</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App