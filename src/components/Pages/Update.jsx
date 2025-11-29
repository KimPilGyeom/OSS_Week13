import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const API = "https://6918866521a96359487057b9.mockapi.io/items";

  const [item, setItem] = useState(null);
  const [count, setCount] = useState(0); // 수정 횟수

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  const updateField = async (field, value) => {
    const updatedItem = { ...item, [field]: value };
    setItem(updatedItem);
    setCount(count + 1);

    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    });
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Update</h2>
      <p>총 수정 횟수: {count}</p>

      <input
        className="form-control mb-2"
        value={item.name}
        onChange={(e) => updateField("name", e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={item.price}
        onChange={(e) => updateField("price", e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        value={item.description}
        onChange={(e) => updateField("description", e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={item.category}
        onChange={(e) => updateField("category", e.target.value)}
      />
    </div>
  );
}