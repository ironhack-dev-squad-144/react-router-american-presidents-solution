import React from "react";
import presidents from "../../presidents";
import { Link } from "react-router-dom";

export default function ListPresidents() {
  return (
    <div>
      <h1>List of American Presidents</h1>
      <table className="table-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {presidents.map(president => (
            <tr key={president.number}>
              <td>{president.number}</td>
              <td>{president.president}</td>
              <td>
                <Link to={"/president-detail/" + president.number}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
