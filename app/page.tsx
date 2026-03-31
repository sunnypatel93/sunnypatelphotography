export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start", // 👈 THIS is key
      paddingTop: "100px", // 👈 controls how far from top
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>

      <img
        src="/logo.png"
        alt="Sunny Patel Photography"
        style={{ width: "980px" }}
      />

    

      <p style={{ fontSize: "2rem", color: "#666" }}>
        Website coming soon 📸
      </p>

    </main>
  );
}