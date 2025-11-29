export default function Button({ children, onClick, style }) {
    return (
      <button onClick={onClick} style={style} className="btn btn-secondary">
        {children}
      </button>
    );
  }