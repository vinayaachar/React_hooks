import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [
  ...Array(length)
]

function Star({selected= false, onSelect}) {
  return (
    <FaStar
      color = {selected ? "red" : "gray"}
      onClick = {onSelect}
    />
  )
}

function StarRating({ totalStar = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStar).map((n, i) => (
        <Star
          key = {i}
          selected= {selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
      />
    ))}
    <p>{selectedStars} of {totalStar}</p>

    </>


  )
}


function App() {
  return <StarRating totalStar = {5} />
}

ReactDOM.render(
  <React.StrictMode>
    <App name = "Vinay"/>
  </React.StrictMode>,
  document.getElementById('root')
);

