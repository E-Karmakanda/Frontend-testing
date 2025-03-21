import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import PopupButton from './components/PopupButton'

function App() {

  return (
    <>
      <div className="container">
        <PopupButton  button_text="Hit me" msg="Here you go!"></PopupButton>
      </div>
    </>
  )
}

export default App
