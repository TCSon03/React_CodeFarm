import React, { useState } from "react";
import { deleteTask, updateTask } from "../../api";
import useGet from "../../hooks/useGet";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useGet();
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const handleDelete = async (id) => {
    try {
      if (confirm("Ban chac chan muon xoa?")) {
        await deleteTask(id);
        setProducts((prev) => prev.filter((item) => item.id != id));
      }
    } catch (error) {
      console.log("Loi khi xoa:", error);
    }
  };
  const handleToggleComplete = async (item) => {
    try {
      const updated = { ...item, completed: !item.completed };
      await updateTask(item.id, updated);
      setProducts((prev) => prev.map((p) => (p.id === item.id ? updated : p)));
    } catch (err) {
      console.log("Lỗi khi cập nhật trạng thái:", err);
    }
  };
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchPriority =
      priorityFilter === "all" || item.priority === priorityFilter;
    return matchSearch && matchPriority;
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 10, padding: 5, width: 300 }}
      />
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        style={{ marginLeft: 10, padding: 5 }}
      >
        <option value="all">Tất cả</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <table border={1} style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => navigate(`/detail/${item.id}`)}
              >
                {item.title}
              </td>
              <td>{item.priority}</td>
              <td
                onClick={() => handleToggleComplete(item)}
                style={{
                  cursor: "pointer",
                  color: item.completed ? "green" : "red",
                }}
              >
                {item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
              </td>
              <td>
                <button onClick={() => navigate(`/edit/${item.id}`)}>
                  Sửa
                </button>
                <button onClick={() => handleDelete(item.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
