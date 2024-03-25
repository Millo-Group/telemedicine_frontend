export default function AccordionActionButtons() {
  return (
    <div className="d-flex justify-content-around text-center align-items-center">
      <a href="javascript:void(0)" className="text-success">
        <span className="material-symbols-outlined">note</span>
      </a>
      <a href="javascript:void(0)">
        <span className="material-symbols-outlined">mic</span>
      </a>
      <a href="javascript:void(0)" className="text-danger">
        <span className="material-symbols-outlined">delete</span>
      </a>
    </div>
  );
}
