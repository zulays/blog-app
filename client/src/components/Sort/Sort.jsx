import React from 'react'
import './Sort.css'

const Sort = (props) => {

  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <form className="sort-contain" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort BY:</label>
      <select className="sort" onChange={handleChange}>
        <option className="option" value="title-asc" >&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option value="title-desc">&nbsp; Alphabetically, Z-A &nbsp;</option>
      </select>
    </form>
  )
}

export default Sort