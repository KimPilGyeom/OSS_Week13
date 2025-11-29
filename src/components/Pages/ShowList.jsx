import React, { useEffect, useState } from "react";
import AddModal from "../Modal/AddModal";
import EditModal from "../Modal/EditModal";

export default function ShowList() {
  const API = "https://6918866521a96359487057b9.mockapi.io/items";
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const deleteItem = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">React CRUD List</h2>

      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Add New Item
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => setEditing(item)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddModal setItems={setItems} />
      <EditModal item={editing} setItems={setItems} />
    </div>
  );
}