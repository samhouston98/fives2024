import React from 'react';

const FullTable = ({ data }) => {
  // Extract headers assuming the first row of data contains the headers
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="full-table">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td> {/* This assumes each player object has a name field */}
              {Object.values(player).slice(1).map((value, cellIndex) => ( // Slice to skip the first value which is the name
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullTable;


