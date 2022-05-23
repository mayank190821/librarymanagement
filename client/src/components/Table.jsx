import React from "react";

function Table() {
  return (
    <>
      <table style={{ border: "1px solid red", width: "50vw" }}>
        <thead>All Books</thead>
        <tbody>
          <tr>
            <th>S.No.</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Albert Eistien</td>
            <td> Mayank bhugra</td>
            <td> Rs. 1000</td>
            <td>
              <i className="fas fa-pen" />
              <i class="fas fa-times"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
