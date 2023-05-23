import React, { useState } from "react"

function Checklist() {
  const checklist = ["Apple", "Banana", "Tea", "Coffee"]

  const [checked, setChecked] = useState([])

  const updatedList = e => {
    const updatedList = [...checked]

    if (e.target.checked) {
      updatedList = [...checked, e.target.value]
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }

    setChecked(updatedList)
  }

  return (
    <div className="checkList">
      <div className="list-container">
        {checklist.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checklist
