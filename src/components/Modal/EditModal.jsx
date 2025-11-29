import React, { useEffect, useState } from "react";

export default function EditModal({ item, setItems }) {
  const API = "https://6918866521a96359487057b9.mockapi.io/items";

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    if (item) {
      setForm({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const updated = await res.json();
    setItems((prev) => prev.map((v) => (v.id === updated.id ? updated : v)));
  };

  return (
    <div className="modal fade" id="editModal" tabIndex="-1">
      <div className="modal-dialog">
        <form onSubmit={handleSubmit} className="modal-content p-3">
          <h5>Edit Item</h5>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <button className="btn btn-primary mt-2">Update</button>
        </form>
      </div>
    </div>
  );
}