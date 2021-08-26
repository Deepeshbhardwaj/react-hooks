// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorage = (
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
  defaultValue = '',
  key,
) => {
  const [name, setName] = React.useState(() => {
    const valueName = window.localStorage.getItem(key)
    if (valueName) {
      return deserialize(valueName)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevRef = React.useRef(key)
  React.useEffect(() => {
    if (key !== prevRef.current) {
      window.localStorage.removeItem(prevRef)
    }
    prevRef.current = key
    window.localStorage.setItem(key, serialize(name))
  }, [key, serialize, name])

  return {name, setName}
}

function Greeting({initialName = ''}) {
  const {name, setName} = useLocalStorage('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
