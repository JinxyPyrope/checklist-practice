import React from "react"

function Checklist() {
  const checklist = ["Apple", "Banana", "Tea", "Coffee"]
  return (
    <div className="checkList">
      <div className="list-container">
        {checklist.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checklist
