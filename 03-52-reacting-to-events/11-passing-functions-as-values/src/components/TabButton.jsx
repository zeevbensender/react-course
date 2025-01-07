export default function TabButton({ children, onMouse }) {
  return (
    <li>
      <button onClick={onMouse}>{children}</button>
    </li>
  );
}
