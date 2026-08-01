import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  ['/', 'Home'],
  ['/schools', 'For Schools'],
  ['/universities', 'For Universities'],
  ['/how-to-ai', 'How to AI'],
  ['/AISchool/', 'AI Assistant', true], // static page served outside the SPA router
  ['/about', 'About Us'],
  ['/contact', 'Contact Us'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="wrap nav-in">
        <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
          <span className="logo-mark">AI</span> India School Of AI
        </NavLink>
        <div className="nav-links">
          {LINKS.map(([to, label, isStatic]) =>
            isStatic ? (
              <a key={to} href={to}>
                {label}
              </a>
            ) : (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            )
          )}
        </div>
        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {LINKS.map(([to, label, isStatic]) =>
          isStatic ? (
            <a key={to} href={to} onClick={() => setOpen(false)}>
              {label}
            </a>
          ) : (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          )
        )}
      </div>
    </nav>
  )
}
