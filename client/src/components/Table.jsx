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
      <div className="tableContainer">
        <table>
          <caption style={{ captionSide: "top", textAlign: "center" }}>
            All Books
          </caption>
          <tr
            style={{ background: "red", color: "white", textAlign: "center" }}
          >
            <th>S.No.</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
          <tbody>
            {tableData && tableData.length !== 0 ? (
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
      </div>
    </>
  );
}

export default Table;
