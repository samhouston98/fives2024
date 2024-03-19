import React, { useState } from 'react';

const sortData = (data, sortBy, sortDirection) => {
  return data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
};

const LeagueTable = ({ data }) => {
  const [sortKey, setSortKey] = useState('winPercentage');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleHeaderClick = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc'); // Default to ascending when changing sort key
    }
  };

  const sortedData = sortData([...data], sortKey, sortDirection);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th onClick={() => handleHeaderClick('played')}>Played</th>
          <th onClick={() => handleHeaderClick('won')}>Won</th>
          <th onClick={() => handleHeaderClick('lost')}>Lost</th>
          <th onClick={() => handleHeaderClick('drawn')}>Drawn</th>
          <th onClick={() => handleHeaderClick('winPercentage')}>Win%</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td>
            <td>{player.played}</td>
            <td>{player.won}</td>
            <td>{player.lost}</td>
            <td>{player.drawn}</td>
            <td>{player.winPercentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;
