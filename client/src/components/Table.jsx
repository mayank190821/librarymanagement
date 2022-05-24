import React, { useEffect, useState } from "react";
import axios from "axios";
function Table() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { status, data } = await axios.get("/api/fetchbook");
      setTableData(data.allBooks);
    }
    fetchData();
  }, []);
  // useEffect(() => {
  //     async function fetchData() {
  //         const { status, data } = await axios.get("/api/fetchbook");
  //         setTableData(data.allBooks);
  //       }
  //       fetchData();
  //     }, [tableData]);

  const handleDelete = async (e) => {
    let element = e.target.name;
    await axios
      .post("/delete/book", { element })
      .then(async () => {
        const { status, data } = await axios.get("/api/fetchbook");
        if(status){
          setTableData(data.allBooks);
        }
      });
  };
  const handleEdit = () => {};
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
            <th></th>
          </tr>
          <tbody>
            {tableData.map((ele, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{ele.bookName}</td>
                  <td> {ele.authorName}</td>
                  <td> {ele.bookPrice}</td>
                  <td>
                    <button
                      style={{
                        background: "transparent",
                        height: "fitContent",
                        width: "fitContent",
                        border: "none",
                      }}
                      onClick={handleEdit}
                      name={ele._id}
                    >
                      <i className="fas fa-pen" style={{ color: "black" }} />
                    </button>
                    <button
                      style={{
                        background: "transparent",
                        height: "fitContent",
                        width: "fitContent",
                        border: "none",
                      }}
                      onClick={handleDelete}
                      name={ele._id}
                    >
                      <i class="fas fa-times" style={{ color: "red" }}></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
