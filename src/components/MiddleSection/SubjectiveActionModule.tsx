export default function SubjectiveActionModule() {
  return (
<div>
<button type="button" className="border-0 bg-white text-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        <span className="material-symbols-outlined">note</span>
</button>
<div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div className="modal-dialog m-4" style={{maxWidth:'100%'}}>
    <div className="modal-content">
      <div className="modal-header py-2 px-4">
        <h1 className="modal-title fs-5" id="exampleModalLabel2">Input Box</h1>
      </div>
      <textarea className="modal-body m-2 p-2" style={{minHeight: "106px",
    backgroundColor: "#D0EDDB",
    border: "1px solid #efeffd",
    borderRadius: "10px",
    transition: "5s",
    height:'65vh',
    boxShadow: "0 3px 5px 1px rgba(0, 0, 0, 0.05)",}}>loream</textarea>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
