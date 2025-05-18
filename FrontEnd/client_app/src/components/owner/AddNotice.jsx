import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextForm = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState([]);
  const [showNotices, setShowNotices] = useState(false);
  const [loadingNotices, setLoadingNotices] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const orgname = localStorage.getItem("ownerOrgName") || "";
  console.log("AddNotice.jsx - orgname from localStorage:", orgname);

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
        body: JSON.stringify({ text, orgname }),
      });

      if (!response.ok) {
        throw new Error("Failed to send text");
      }

      const result = await response.json();
      toast.success(result.message || "Notice added successfully");
      setText("");
      fetchNotices();
    } catch (err) {
      console.error(err);
      toast.error("Error sending text to server.");
    } finally {
      setLoading(false);
    }
  };

  const fetchNotices = async () => {
    setLoadingNotices(true);
    try {
      const response = await fetch("http://localhost:3000/owner/getAllAddNotices");
      if (!response.ok) {
        throw new Error("Failed to fetch notices");
      }
      const data = await response.json();
      setNotices(data.data || []);
      setShowNotices(true);
    } catch (err) {
      console.error(err);
      toast.error("Error fetching notices.");
    } finally {
      setLoadingNotices(false);
    }
  };

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingText("");
  };

  const saveEdit = async () => {
    if (!editingText.trim()) {
      toast.error("Text cannot be empty");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/owner/updateAddNoticeText", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: editingId, text: editingText }),
      });
      if (!response.ok) {
        throw new Error("Failed to update notice");
      }
      const result = await response.json();
      toast.success(result.message || "Notice updated successfully");
      setEditingId(null);
      setEditingText("");
      fetchNotices();
    } catch (err) {
      console.error(err);
      toast.error("Error updating notice.");
    }
  };

  const deleteNotice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      const response = await fetch(`http://localhost:3000/owner/deleteAddNoticeText/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete notice");
      }
      const result = await response.json();
      toast.success(result.message || "Notice deleted successfully");
      fetchNotices();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting notice.");
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

      <button onClick={fetchNotices} style={{ ...styles.button, marginTop: "20px" }} disabled={loadingNotices}>
        {loadingNotices ? "Loading..." : "Show Notes"}
      </button>

      {showNotices && (
        <div style={styles.noticeList}>
          {notices.length === 0 ? (
            <p>No notices found.</p>
          ) : (
            notices.map((notice) => (
              <div key={notice._id} style={styles.noticeItem}>
                <p><strong>Org Name:</strong> {notice.orgname || "N/A"}</p>
                {editingId === notice._id ? (
                  <>
                    <textarea
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      style={styles.textarea}
                    />
                    <button onClick={saveEdit} style={styles.smallButton}>Save</button>
                    <button onClick={cancelEditing} style={styles.smallButton}>Cancel</button>
                  </>
                ) : (
                  <>
                    <p><strong>Text:</strong> {notice.text}</p>
                    <button onClick={() => startEditing(notice._id, notice.text)} style={styles.smallButton}>Edit</button>
                    <button onClick={() => deleteNotice(notice._id)} style={styles.smallButton}>Delete</button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#121212",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
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
  noticeList: {
    marginTop: "20px",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    padding: "10px",
    color: "white",
  },
  noticeItem: {
    borderBottom: "1px solid #444",
    padding: "10px 0",
  },
  smallButton: {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    height: "60px",
    borderRadius: "5px",
    padding: "5px",
    marginBottom: "10px",
  },
};

export default TextForm;
