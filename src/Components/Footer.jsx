import React, {useContext} from 'react'
import { ContextTema } from '../context/ContextTema'

const Footer = () => {
  const {isTema}=useContext(ContextTema)
  return (
    <footer className={isTema ?"dark":"noDark"}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
