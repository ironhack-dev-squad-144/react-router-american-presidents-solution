import React from 'react'
import presidents from '../../presidents'

export default function PresidentDetail(props) {
  const number = Number(props.match.params.number) // Because of <Route path="/president-detail/:number" component={PresidentDetail} />
  const president = presidents.find(p => p.number === number)

  if (!president) {
    return <div>Sorry, there is no president</div>
  }

  let end = president.left_office ? new Date(president.left_office) : new Date()
  let start = new Date(president.took_office)
  const officeTime = (end - start) / (1000*60*60*24*365.25)
  return (
    <div>
      <h1>President Detail</h1>
      <ul>
        <li><strong>President Number</strong>: {number}</li>
        <li><strong>Name</strong>: {president.president}</li>
        <li><strong>Birth Year</strong>: {president.birth_year}</li>
        <li><strong>Death Year</strong>: {president.death_year} ()</li>
        <li><strong>Took office</strong>: {president.took_office}</li>
        <li><strong>Left office</strong>: {president.left_office || "Still President"}</li>
        <li><strong>Office Time</strong>: {officeTime.toFixed(1)} years</li>
        <li><strong>Party</strong>: {president.party}</li>
      </ul>
    </div>
  )
}
