export default function TabButton({ children, onMouse }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button onClick={onMouse}>{children}</button>
    </li>
  );
}
