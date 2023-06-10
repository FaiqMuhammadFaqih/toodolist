import Table from "react-bootstrap/Table";

const ListTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="mt-3"
              type="checkbox"
              style={{
                fontSize: "20px",
                width: "50px",
                height: "20px",
                border: "none",
              }}
            ></input>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default ListTable;
