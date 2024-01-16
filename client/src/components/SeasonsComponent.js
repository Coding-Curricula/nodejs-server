import React, {useState} from 'react'

export default function SeasonsComponent() {
    const [seasonMessage, setSeasonMessage] = useState('')

    const fetchSeasonMessage = (season) => {
        fetch(`http://localhost:8080/${season}`)
        .then(response => response.text())
        .then(data => setSeasonMessage(data))
        .catch(error => console.log(error))
    }

  return (
    <div>
        <h1>Seasons Component</h1>
        <button onClick={() => fetchSeasonMessage('summer')}>Summer</button>
        <button onClick={() => fetchSeasonMessage('winter')}>Winter</button>
        <button onClick={() => fetchSeasonMessage('spring')}>Spring</button>
        <button onClick={() => fetchSeasonMessage('fall')}>Fall</button>
        <button onClick={() => fetchSeasonMessage('')}>Home</button>
        <p>{seasonMessage}</p>
    </div>
  )
}
