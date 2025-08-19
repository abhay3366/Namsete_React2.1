const NotConnectedInternet = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        color: "#333",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ marginTop: "20px", fontSize: "28px", fontWeight: "bold" }}>
        No Internet Connection
      </h1>
      <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
        Please check your connection and try again.
      </p>
    </div>
  );
};

export default NotConnectedInternet;
