// App.js
import React, { useState } from 'react';
import LeagueTable from './LeagueTable';
import FullTable from './FullTable';
import './App.css'; // Import your CSS file here

// Sample data extracted from your image
const leagueData = [
  { name: 'Sam H', played: 26, won: 14, lost: 9, drawn: 3, winPercentage: 61 },
  { name: 'Andy', played: 19, won: 9, lost: 7, drawn: 3, winPercentage: 56 },
  { name: 'Sam B', played: 14, won: 7, lost: 6, drawn: 1, winPercentage: 54 },
  { name: 'Mark O', played: 23, won: 11, lost: 10, drawn: 2, winPercentage: 52 },
  { name: 'Simon', played: 16, won: 7, lost: 7, drawn: 2, winPercentage: 50 },
  { name: 'Gordon', played: 24, won: 10, lost: 11, drawn: 3, winPercentage: 48 },
  { name: 'Douglas', played: 23, won: 10, lost: 11, drawn: 2, winPercentage: 48 },
  { name: 'Michael', played: 24, won: 9, lost: 13, drawn: 2, winPercentage: 41 },
  { name: 'Liam', played: 25, won: 8, lost: 14, drawn: 3, winPercentage: 36 },
  { name: 'Robin', played: 25, won: 8, lost: 15, drawn: 2, winPercentage: 35 },
  // ... add the rest of the data with player names
];


const fullData = [
  {
    name: 'Sam H',
    Played: '26',
    Won: '14',
    Lost: '9',
    Drawn: '3',
    WinPercentage: '61',
    ResultsUpTo: 'WLLWWLWDWLDWWWLWDWLWWL',
    '15-Jan': 'D',
    '22-Jan': 'W',
    '29-Jan': 'W',
    '05-Feb': 'L',
    '12-Feb': 'W',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': 'L',
    '11-Mar': 'L',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Andy',
    Played: '19',
    Won: '9',
    Lost: '7',
    Drawn: '3',
    WinPercentage: '56',
    ResultsUpTo: 'WWLDLWWWLDLLW',
    '15-Jan': 'D',
    '22-Jan': 'W',
    '29-Jan': '',
    '05-Feb': 'L',
    '12-Feb': 'W',
    '19-Feb': 'L',
    '26-Feb': 'W',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Sam B',
    Played: '14',
    Won: '7',
    Lost: '6',
    Drawn: '1',
    WinPercentage: '54',
    ResultsUpTo: 'LWWLLWLWW',
    '15-Jan': 'D',
    '22-Jan': '',
    '29-Jan': 'L',
    '05-Feb': '',
    '12-Feb': 'W',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': 'W',
    // ... other dates
  },
  {
    name: 'Mark O',
    Played: '23',
    Won: '11',
    Lost: '10',
    Drawn: '2',
    WinPercentage: '52',
    ResultsUpTo: 'LWLWWLLWDLWWLWW',
    '15-Jan': 'D',
    '22-Jan': 'L',
    '29-Jan': 'L',
    '05-Feb': 'W',
    '12-Feb': 'L',
    '19-Feb': '',
    '26-Feb': 'L',
    '04-Mar': '',
    '11-Mar': 'W',
    '18-Mar': 'W',
    // ... other dates
  },
  {
    name: 'Simon',
    Played: '16',
    Won: '7',
    Lost: '7',
    Drawn: '2',
    WinPercentage: '50',
    ResultsUpTo: 'WLWDWWLDLWWL',
    '15-Jan': '',
    '22-Jan': 'L',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': 'L',
    '26-Feb': 'L',
    '04-Mar': 'W',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Gordon',
    Played: '24',
    Won: '10',
    Lost: '11',
    Drawn: '3',
    WinPercentage: '48',
    ResultsUpTo: 'WLLWDLLWWLDWLLWLW',
    '15-Jan': 'D',
    '22-Jan': 'W',
    '29-Jan': 'W',
    '05-Feb': '',
    '12-Feb': 'L',
    '19-Feb': 'L',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': 'L',
    '18-Mar': 'W',
    // ... other dates
  },
  {
    name: 'Douglas',
    Played: '23',
    Won: '10',
    Lost: '11',
    Drawn: '2',
    WinPercentage: '48',
    ResultsUpTo: 'WWLWWLLLLDLLWLW',
    '15-Jan': 'D',
    '22-Jan': '',
    '29-Jan': 'L',
    '05-Feb': 'W',
    '12-Feb': 'W',
    '19-Feb': 'W',
    '26-Feb': '',
    '04-Mar': 'L',
    '11-Mar': 'W',
    '18-Mar': 'L',
    // ... other dates
  },
  {
    name: 'Michael',
    Played: '24',
    Won: '9',
    Lost: '13',
    Drawn: '2',
    WinPercentage: '41',
    ResultsUpTo: 'LLWLWDLLLLDWWLLW',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': 'W',
    '05-Feb': 'W',
    '12-Feb': 'L',
    '19-Feb': 'L',
    '26-Feb': 'W',
    '04-Mar': 'W',
    '11-Mar': 'L',
    '18-Mar': 'L',
    // ... other dates
  },
  {
    name: 'Liam',
    Played: '25',
    Won: '8',
    Lost: '14',
    Drawn: '3',
    WinPercentage: '36',
    ResultsUpTo: 'LWWWLLDWLWLWLDLLLL',
    '15-Jan': 'D',
    '22-Jan': '',
    '29-Jan': 'L',
    '05-Feb': 'L',
    '12-Feb': 'L',
    '19-Feb': '',
    '26-Feb': 'W',
    '04-Mar': 'W',
    '11-Mar': '',
    '18-Mar': 'L',
    // ... other dates
  },
  {
    name: 'Robin',
    Played: '25',
    Won: '8',
    Lost: '15',
    Drawn: '32',
    WinPercentage: '35',
    ResultsUpTo: 'LLLLLWLWWLWWDLLWLL',
    '15-Jan': 'D',
    '22-Jan': 'L',
    '29-Jan': 'L',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': 'W',
    '26-Feb': 'L',
    '04-Mar': 'L',
    '11-Mar': 'W',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: '',
    Played: '',
    Won: '',
    Lost: '',
    Drawn: '',
    WinPercentage: '',
    ResultsUpTo: '',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Paddy',
    Played: '12',
    Won: '5',
    Lost: '6',
    Drawn: '1',
    WinPercentage: '45',
    ResultsUpTo: 'LLLLWWWL',
    '15-Jan': 'D',
    '22-Jan': 'W',
    '29-Jan': 'W',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': 'L',
    '18-Mar': '',
    // ... other dates
  },
  
  {
    name: 'Cammy',
    Played: '10',
    Won: '4',
    Lost: '6',
    Drawn: '0',
    WinPercentage: '40',
    ResultsUpTo: 'WWWLLLL',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': 'W',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': 'L',
    // ... other dates
  },
  {
    name: 'Gmac',
    Played: '8',
    Won: '6',
    Lost: '2',
    Drawn: '0',
    WinPercentage: '75',
    ResultsUpTo: 'LWWWW',
    '15-Jan': '',
    '22-Jan': 'L',
    '29-Jan': '',
    '05-Feb': 'W',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': 'W',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Josh',
    Played: '7',
    Won: '3',
    Lost: '1',
    Drawn: '3',
    WinPercentage: '75',
    ResultsUpTo: 'DLDW',
    '15-Jan': 'D',
    '22-Jan': 'W',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': 'W',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Andrew',
    Played: '7',
    Won: '4',
    Lost: '3',
    Drawn: '0',
    WinPercentage: '57',
    ResultsUpTo: '',
    '15-Jan': '',
    '22-Jan': 'L',
    '29-Jan': '',
    '05-Feb': 'W',
    '12-Feb': 'W',
    '19-Feb': 'L',
    '26-Feb': 'W',
    '04-Mar': '',
    '11-Mar': 'W',
    '18-Mar': 'L',
    // ... other dates
  },
  {
    name: 'Ryan',
    Played: '7',
    Won: '2',
    Lost: '5',
    Drawn: '1',
    WinPercentage: '29',
    ResultsUpTo: 'LLWDWLL',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': 'L',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Calum',
    Played: '6',
    Won: '4',
    Lost: '1',
    Drawn: '1',
    WinPercentage: '80',
    ResultsUpTo: 'WDWWW',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': 'L',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'JT',
    Played: '5',
    Won: '2',
    Lost: '3',
    Drawn: '0',
    WinPercentage: '40',
    ResultsUpTo: '',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': 'L',
    '12-Feb': 'L',
    '19-Feb': 'W',
    '26-Feb': 'L',
    '04-Mar': 'W',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Mark D',
    Played: '4',
    Won: '3',
    Lost: '1',
    Drawn: '0',
    WinPercentage: '75',
    ResultsUpTo: 'LWWW',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Allan',
    Played: '4',
    Won: '2',
    Lost: '2',
    Drawn: '0',
    WinPercentage: '50',
    ResultsUpTo: 'WLWL',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': '',
    '11-Mar': '',
    '18-Mar': '',
    // ... other dates
  },
  {
    name: 'Conor',
    Played: '2',
    Won: '2',
    Lost: '0',
    Drawn: '0',
    WinPercentage: '100',
    ResultsUpTo: '',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': 'W',
    '11-Mar': '',
    '18-Mar': 'W',
    // ... other dates
  },
  {
    name: 'John R',
    Played: '2',
    Won: '1',
    Lost: '1',
    Drawn: '0',
    WinPercentage: '50',
    ResultsUpTo: '',
    '15-Jan': '',
    '22-Jan': '',
    '29-Jan': '',
    '05-Feb': '',
    '12-Feb': '',
    '19-Feb': '',
    '26-Feb': '',
    '04-Mar': 'L',
    '11-Mar': 'W',
    '18-Mar': '',
    // ... other dates
  },
  // ... add the rest of the data
];


function App() {
  const [showFullTable, setShowFullTable] = useState(false);

  const handleZoomToggle = () => {
    setShowFullTable(prevShowFullTable => !prevShowFullTable);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showFullTable ? <FullTable data={fullData} /> : <LeagueTable data={leagueData} />}
        <button onClick={handleZoomToggle}>
          {showFullTable ? 'Show League Table' : 'Show Full Table'}
        </button>
      </header>
    </div>
  );
}

export default App;
