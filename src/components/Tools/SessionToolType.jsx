export default function SessionsToolType({ active, payload }) {
    
  if (active) {
    return (
      <span className="tools_point">
        <p>{payload[0].value}min</p>
      </span>
    );
  }
  return null;
}

