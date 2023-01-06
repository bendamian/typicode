import React from 'react'
import Row from './Row';

function Table({item}) {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {item.map(item => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table
