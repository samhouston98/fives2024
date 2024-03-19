import React from 'react';

const LeagueTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th> {/* Add the Name header */}
          <th>Played</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Drawn</th>
          <th>Win%</th>
        </tr>
      </thead>
      <tbody>
        {data.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td> {/* Add the player name */}
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
