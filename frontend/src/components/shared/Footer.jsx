import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
        <div>
            <a
            href="https://github.com/Kamruzzaman1351"
            target="_blank"
            rel="noopener noreferrer"
            >
            Created by{' '}
            <span>
                Kamruzzaman
            </span>
            </a>
            <p>Copyright &copy; {currentYear} My Blog</p>
        </div>
    </footer>
  )
}

export default Footer