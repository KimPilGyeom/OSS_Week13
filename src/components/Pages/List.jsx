import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const API = "http://localhost:4000/items";
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Item List</h2>

      <Link to="/create" className="btn btn-primary mb-3">
        Create New
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Detail</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>

              <td>
                <Link to={`/detail/${item.id}`} className="btn btn-info btn-sm">
                  View
                </Link>
              </td>

              <td>
                <Link to={`/update/${item.id}`} className="btn btn-warning btn-sm">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}