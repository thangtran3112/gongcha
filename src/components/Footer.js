import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
        <p>
          <span>&copy; {new Date().getFullYear()} </span> 
          <span>Gong Cha Kelowna</span>
          <span>. All rights reserved.</span>
        </p>
    </footer>
  )
}

export default Footer
