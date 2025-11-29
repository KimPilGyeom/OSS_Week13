import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const API = "https://6918866521a96359487057b9.mockapi.io/items";
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Detail</h2>
      <p><b>Name:</b> {item.name}</p>
      <p><b>Description:</b> {item.description}</p>
      <p><b>Price:</b> {item.price}</p>
      <p><b>Category:</b> {item.category}</p>
    </div>
  );
}