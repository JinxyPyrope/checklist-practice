import React, { useState } from "react"
import "./Checklist.css"

function Checklist() {
  const checklist = ["Apple", "Banana", "Tea", "Coffee"]

  const [checked, setChecked] = useState([])

  // Checks to add or remove from the list with the checkamrk
  const handleCheck = e => {
    let updatedList = [...checked]

    if (e.target.checked) {
      updatedList = [...checked, e.target.value]
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }

    setChecked(updatedList)
    console.log(checked)
  }

  //Adds a slash through if an item is checked by giving it a className
  const isChecked = item => (checked.includes(item) ? "checked-item" : "not-checked-item")

  // Creates a string to show the list in view
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item
      })
    : ""

  return (
    <div className="checkList">
      <div className="list-container">
        {checklist.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
          </div>
        ))}
      </div>
      <div>{`Items checked are: ${checkedItems}`}</div>
    </div>
  )
}

export default Checklist
