import React from "react"
import "./Sort.css"

const Sort = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <form className="sort-contain" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort By:</label>
      <select className="sort" onChange={handleChange}>
        <option className="option" value="title-asc">&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option value="title-desc">&nbsp; Alphabetically, Z-A &nbsp;</option>
        {/* <option className="option" value="name-asc">&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option className="option" value="name-asc">&nbsp; Alphabetically, A-Z &nbsp;</option> */}
      </select>
    </form>
  )
}


export default Sort