// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName)

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
  return <Greeting initialName={'Deepesh'} />
}

export default App

// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'

// function App() {
//   function UsernameForm({onSubmitUsername}) {
//     const [userName, setUserName] = React.useState('')
//     const handleSubmit = event => {
//       event.preventDefault()
//       const name = event.target.elements.name.value
//       onSubmitUsername(name)
//     }
//     const handleChange = e => {
//       setUserName(e.target.value)
//     }
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Username:</label>
//           <input
//             id="name"
//             type="text"
//             value={userName.toLowerCase()}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
//   const onSubmitUsername = username => alert(`You entered: ${username}`)

//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App
