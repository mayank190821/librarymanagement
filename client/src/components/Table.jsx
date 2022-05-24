import React, { useEffect, useState } from "react";
import axios from "axios";
function Table() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/fetchbook");
      console.log(data);
      setTableData(data);
    }
    fetchData();
  }, []);
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
          {(tableData && tableData.length !== 0 )? (
            <div>
              {tableData.map((elem, indx) => {
                return (
                  <tr>
                    <td>{indx}</td>
                    <td>{elem.bookName}</td>
                    <td> {elem.authorName}</td>
                    <td> {elem.bookPrice}</td>
                    <td>
                      <i className="fas fa-pen" />
                      <i class="fas fa-times"></i>
                    </td>
                  </tr>
                );
              })}
            </div>
          ) : (
            <tr />
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
