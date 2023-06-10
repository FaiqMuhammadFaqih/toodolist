import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import InputTable from "./InputTable";
import ListTable from "./ListTable";
import "./../css/style.css";

const AppTable = () => {
  return (
    <div className="App">
      <h1
        className="ha1"
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "orange",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Jadwal Kegiatan Harian
      </h1>
      <div style={{ marginTop: "50px" }}>
        <InputTable />
      </div>
      <div className="container">
        <Table
          striped
          bordered
          hover
          size="sm"
          className="align-items-center mt-5"
        >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th style={{ width: "10%" }}>Check</th>
              <th>Kegiatan</th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <ListTable />
              </td>{" "}
              <td>
                <div className="d-flex justify-content-between ">
                  {" "}
                  <p
                    style={{
                      border: "none",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    john Wick
                  </p>
                  <button
                    style={{
                      border: "none",
                      alignItems: "center",
                      fontSize: "20px",
                      color: "black",
                      borderRadius: "5px",
                    }}
                    className="mb-3 mt-3  bg-warning"
                  >
                    Edit
                  </button>
                </div>
              </td>{" "}
              <td
                className="d-flex justify-content-center 
                "
                style={{ alignItems: "center" }}
              >
                <button
                  className="mb-3 mt-3 bg-danger"
                  style={{
                    border: "none",
                    fontSize: "20px",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AppTable;
