import ClientTodo from "./components/ClientTodo";
import ServerTodo from "./components/ServerTodo";

export default function DashbordPage({ searchParams }) {
  return (
    <div className="grid grid-rows-1 grid-cols-2 ">
      <ClientTodo testProps="test props to client" />
      <ServerTodo testProps="test props to server" />
    </div>
  );
}

{
  /* <button onClick={() => dialog.showModal()}>open drawer</button>
  <dialog
    id="dialog"
    className="w-2/3 h-screen mx-0 backdrop:bg-white backdrop:w-1/2 backdrop:animate-left-to-right animate-left-to-right "
  >
    <form method="dialog">
      <button className="m-2 ">
        <CircleX />
      </button>
    </form>
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  </dialog> */
}
