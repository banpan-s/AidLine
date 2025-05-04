import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/owner/saveAddNoticeText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to send text");
      }

      const result = await response.json();
      alert(`Server responded: ${result.message || "Success"}`);
      console.log("Server response:", result);

      setText(""); // Clear input after success
    } catch (err) {
      console.error(err);
      alert("Error sending text to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
          required
          style={styles.input}
          disabled={loading}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#121212",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "10px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    padding: "10px 20px",
    marginLeft: "10px",
    backgroundColor: "#3f51b5",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TextForm;
