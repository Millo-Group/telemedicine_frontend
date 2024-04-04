import { useState, MouseEventHandler, useEffect } from "react";
import UiInputBox from "./UiInputBox";
import styles from "./index.module.css";
import useApi from "../../hooks/useApi";
interface props {
  show?: Boolean;
  toggleModal?: MouseEventHandler<HTMLButtonElement>;
  notesData: noteType[];
  patientId?: String;
  updateNotes?: Function;
}
interface AssessmentNote {
  assessment: string;
}

type noteType = AssessmentNote;

const AssessmentNoteModal: React.FC<props> = ({
  show,
  toggleModal,
  notesData,
  updateNotes,patientId
}) => {
  const api = useApi();

  const [assessmentNotesList, setAssessmentNotesList] = useState<noteType[]>(
    []
  );

  const updateAssessmentNoteValue = (value: string, index: number) => {
    setAssessmentNotesList((oldList) => {
      const newList = [...oldList];
      newList[index].assessment = value;
      return newList;
    });
  };

  const addNewNoteHandler = () => {
    let newNote = { display_name: "", assessment: "" };
    setAssessmentNotesList((oldList) => {
      const newList = [...oldList];
      newList.push(newNote);
      return newList;
    });
  };

  const addAndUpdateNoteHandler = (note: any) => {
    if (note.id) updateNotesData(note);
    else addNewNote(note);
  };

  const updateNotesData = async (note: any) => {
    let payload = {
      display_name: note.assessment,
      assessment: note.assessment,
    };

    await api.put(`notes/${note.id}`, payload);
  };
  const addNewNote = async (note: any) => {
    let payload = {
      display_name: note?.display_name || "",
      assessment: note?.assessment || "",
      patient_id: patientId,
    };
    await api.post(`notes`, payload);
    updateNotes && updateNotes();
  };

  useEffect(() => {
    setAssessmentNotesList(notesData);
  }, [notesData]);
  return (
    <>
      {show && (
        <div>
          <div
            className="modal"
            id="exampleModal4"
            aria-labelledby="exampleModalLabel4"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog mx-auto" style={{ maxWidth: "65%" }}>
              <div className="modal-content">
                <div className="modal-header py-3 px-4">
                  <h1 className="modal-title fs-5" id="exampleModalLabel4">
                    Assessment Note
                  </h1>
                </div>
                <div>
                  {assessmentNotesList.length > 0 &&
                    assessmentNotesList.map((note, index) => (
                      <div
                        key={index}
                        className="modal-body mx-2 d-flex flex-column align-items-end"
                      >
                        <UiInputBox
                          value={
                            note.assessment
                              ? note.assessment.replace(/<\/?p>/g, "")
                              : ""
                          }
                          onChange={(value: string) =>
                            updateAssessmentNoteValue(value, index)
                          }
                        />
                        <button
                          type="button"
                          style={{ width: "15%" }}
                          className="btn btn-primary"
                          onClick={() => addAndUpdateNoteHandler(note)}
                        >
                          Save changes
                        </button>
                      </div>
                    ))}
                </div>
                <div className={styles.addNoteBtn}>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {
                      addNewNoteHandler();
                    }}
                  >
                    Add Note
                  </button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssessmentNoteModal;
