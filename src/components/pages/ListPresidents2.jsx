import React from "react";
import presidents from "../../presidents";
import { Link, Route } from "react-router-dom";
import PresidentDetail from "./PresidentDetail";

export default function ListPresidents2() {
  return (
    <div>
      <h1>List of American Presidents</h1>
      <div className="row">
        <div className="col">
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
                    <Link to={"/list-presidents2/" + president.number}>
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col">
          {/* Will render PresidentDetail and give a props.match.params.number */}
          <Route path="/list-presidents2/:number" render={PresidentDetail} />
        </div>
      </div>
    </div>
  );
}
