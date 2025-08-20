import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form>
      <div>
        <label>Name: </label>
        <input type="text" name="name" />
      </div>

      <div>
        <label>Email: </label>
        <input type="email" name="email" />
      </div>

      <div>
        <label>Message: </label>
        <textarea name="message" rows="4"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact