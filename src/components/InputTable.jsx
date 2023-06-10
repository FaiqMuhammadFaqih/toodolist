const InputTable = () => {
  return (
    <div className="d-flex justify-content-center gap-3">
      <input
        type="text"
        placeholder="Tambahkan Kegiatan Anda"
        className="p-3"
        style={{ width: "50%" }}
      ></input>
      <button
        style={{
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#0D6EFD",
          color: "white",
          fontSize: "15px",
        }}
      >
        Tambah Kegiatan
      </button>
    </div>
  );
};

export default InputTable;
