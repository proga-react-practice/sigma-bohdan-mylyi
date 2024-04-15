import { useState } from 'react'
import './App.css'

function App() {
  const [firstTeam, setFirstTeam] = useState('');
  const [secondTeam, setSecondTeam] = useState('');
  const [firstTeamDirty, setFirstTeamDirty] = useState(false);
  const [secondTeamDirty, setSecondTeamDirty] = useState(false);
  const [firstTeamError, setFirstTeamError] = useState('Input can not be empty!');
  const [secondTeamError, setSecondTeamError] = useState('Input can not be empty!');
  const [tickets, setTickets] = useState(0);
  const [ticketsDirty, setTicketsDirty] = useState(false);
  const [ticketsError, setTicketsError] = useState('Input can not be empty!');

  const teamHandler = (e, setTeam, setDirty, setError) => {
    const value = e.target.value;
    setTeam(value);
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    setDirty(true)
    if (invalidChars.test(value)) {
      setError('The name of the team must consist only of letters or numbers!');
      if(!value) {
        setError(
          'Input can not be empty!'
        )
      }
    } else {
      setError('');
    }
  };
  

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'firstTeam':
        setFirstTeamDirty(true);
        if (!firstTeam) {
          setFirstTeamError('Input cant be empty!');
        }
        break;
      case 'secondTeam':
        setSecondTeamDirty(true);
        if (!secondTeam) {
          setSecondTeamError('Input cant be empty!');
        }
        break;
    }
  }

  return (
    <>
      <div className="container">
        <form action="" className='form-container'>
        <label htmlFor="firstTeam">First Team:</label>
        {firstTeamDirty && firstTeamError && <div style={{ color: 'red' }}>{firstTeamError}</div>}
          <input onChange={(e) => teamHandler(e, setFirstTeam, setFirstTeamDirty, setFirstTeamError)}
            onBlur={e => blurHandler(e)}
            value={firstTeam}
            name='firstTeam'
            type="text"
            className='input'
            id='firstTeam'
            required/>
        <label htmlFor="secondTeam">Second Team:</label>
        {secondTeamDirty && secondTeamError && <div style={{ color: 'red' }}>{secondTeamError}</div>}
      <input
          onChange={(e) => teamHandler(e, setSecondTeam, setSecondTeamDirty, setSecondTeamError)}
          onBlur={e => blurHandler(e)}
          value={secondTeam}
          name='secondTeam'
          type="text"
          className='input'
          id='secondTeam'
          required
      />
        <label htmlFor="numberOfTickets">Tickets:</label>
        {(ticketsDirty && ticketsError) && <div style={{color: 'red'}}>{ticketsError}</div>}
          <input value={tickets} name='tickets' type="number" className='input' id='numberOfTickets'/>
        <label htmlFor="stadium">Stadium:</label>
          <select name="stadium" id="stadium" className='input input_select'>
            <option disabled>Choose Stadium:</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div className="buttons">
            <button type='reset' className='button'>Reset</button>
            <button type='submit' className='button'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
