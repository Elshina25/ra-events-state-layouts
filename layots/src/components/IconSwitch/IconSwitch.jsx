export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-switch">
      <button className="material-icons-button" onClick={() => {
            icon === "view_module" ? onSwitch("view_list"): onSwitch("view_module");
        }}
      >
        <span className={"material-icons"}>{icon}</span>
      </button>
    </div>
  );
}
