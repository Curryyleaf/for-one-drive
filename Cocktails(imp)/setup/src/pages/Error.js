import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <Link to="/">
          <h1>Oops ! it's a dead end </h1>
        </Link>
      </div>
    </section>
  );
}

export default Error
