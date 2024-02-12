import React, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom'

// CSS
import styles from '../components/MenuHeader.module.css'

const MenuHeader = () => {
  const [text] = useTypewriter({
    words: ['RP Utilidades', 'Gourmet Mix'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav__menu'
      ? setActive('nav__menu nav__active')
      : setActive('nav__menu')

    // TogglerIcon
    icon === 'nav__toggler'
      ? setIcon('nav__toggler toggle')
      : setIcon('nav__toggler')
  }

  return (
    <>
      <nav className={styles.nav}>
        <NavLink exact to="/" className={styles.nav__brand}>
          <span>{text}</span>
          <Cursor cursorColor="red" />
        </NavLink>
        <ul className={active}>
          <li className={styles.nav__item}>
            <NavLink
              exact
              to="/"
              className={styles.nav__link}
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              to="/about"
              className={styles.nav__link}
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              to="/products"
              className={styles.nav__link}
              activeClassName="active"
            >
              Products
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              to="/contact"
              className={styles.nav__link}
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </nav>
    </>
  )
}

export default MenuHeader
