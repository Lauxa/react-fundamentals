// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    setItems([
      ...items,
      allItems.find(i => !items.map(({id}) => id).includes(i.id)),
    ])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  React.useEffect(() => {
    const id = setInterval(() => setItems(shuffle), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <>
      <div className="keys">
        <button disabled={items.length >= allItems.length} onClick={addItem}>
          add item
        </button>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          {items.map(item => (
            // 🐨 add a key prop to the <li> below. Set it to item.id
            <li key={item.id}>
              <button onClick={() => removeItem(item)}>remove</button>{' '}
              <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
              <input id={`${item.id}-input`} defaultValue={item.value} />
            </li>
          ))}
        </ul>
      </div>
      <p className="keys">
        {items.map(item => (
          <input
            key={item.id}
            id={`${item.id}-input`}
            defaultValue={item.value}
          />
        ))}
      </p>
    </>
  )
}

function shuffle(originalArray) {
  const array = [...originalArray]
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export default App
