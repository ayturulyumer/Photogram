import "./successMessageModal.css";

export default function SuccessMessageModal({successMsg}) {
  return (
    <div className="backdrop">
    <div id="success_tic" className="modal fade" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="page-body">
            <div className="head">
              <h3 style={{ marginTop: 5 }}>{successMsg}</h3>
            </div>
            <h1 style={{ textAlign: "center" }}>
              <div className="checkmark-circle">
                <div className="background" />
                <div className="checkmark draw" />
              </div>
            </h1>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
