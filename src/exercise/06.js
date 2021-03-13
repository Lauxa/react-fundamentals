// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const inputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(inputValue)
  }

  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // const [error, setError] = React.useState(null)
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = event => {
    const {value} = event.target
    setInputValue(value.toLowerCase())
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          name="username"
          type="text"
          onChange={event => handleChange(event)}
          value={inputValue}
        />
      </div>
      {/* {error ? (
        <p role="alert" style={{color: 'red'}}>
          {error}
        </p>
      ) : null} */}

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
