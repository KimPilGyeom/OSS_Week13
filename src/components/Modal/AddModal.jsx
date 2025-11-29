import React from "react";

export default function AddModal({ setItems }) {
  const API = "https://6918866521a96359487057b9.mockapi.io/items";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      category: e.target.category.value,
    };

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    const data = await res.json();
    setItems((prev) => [...prev, data]);
  };

  return (
    <div className="modal fade" id="addModal" tabIndex="-1">
      <div className="modal-dialog">
        <form onSubmit={handleSubmit} className="modal-content p-3">
          <h5>Add New Item</h5>

          <input name="name" className="form-control mb-2" placeholder="Name" required />
          <input name="description" className="form-control mb-2" placeholder="Description" required />
          <input name="price" className="form-control mb-2" placeholder="Price" required />
          <input name="category" className="form-control mb-2" placeholder="Category" required />

          <button className="btn btn-primary mt-2">Save</button>
        </form>
      </div>
    </div>
  );
}