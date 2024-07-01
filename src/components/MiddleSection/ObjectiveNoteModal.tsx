import { useState, MouseEventHandler, useEffect } from "react";
import UiInputBox from "./UiInputBox";
import {useApi} from "../../hooks/useApi";
import styles from "./index.module.css";

interface props {
  show?: Boolean;
  toggleModal?: MouseEventHandler<HTMLButtonElement>;
  notesData: noteType[];
  updateNotes?: Function;
  patientId?: String;

}
interface ObjectiveNote {
  objective: string;
}
type noteType = ObjectiveNote;

const ObjectiveNoteModal: React.FC<props> = ({
  show,
  toggleModal,
  notesData,
  updateNotes,patientId
}) => {
  const api = useApi();
  const [objectiveNotesList, setObjectiveNotesList] = useState<noteType[]>([]);

  const updateObjectiveNoteValue = (value: string, index: number) => {
    setObjectiveNotesList((oldList) => {
      const newList = [...oldList];
      newList[index].objective = value;
      return newList;
    });
  };

  const addNewNoteHandler = () => {
    let newNote = { display_name: "", objective: "" };
    setObjectiveNotesList((oldList) => {
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
      display_name: note.objective,
      objective: note.objective,
    };

    await api.put(`notes/${note.id}`, payload);
  };
  const addNewNote = async (note: any) => {
    let payload = {
      display_name: note?.display_name || "",
      objective: note?.objective || "",
      patient_id: patientId,
    };
    await api.post(`notes`, payload);
    updateNotes && updateNotes();
  };

  useEffect(() => {
    setObjectiveNotesList(notesData);
  }, [notesData]);

  return (
    <>
      {show && (
        <div>
          <div
            className="modal"
            id="exampleModal3"
            aria-labelledby="exampleModalLabel3"
            aria-hidden="true"
            style={{ display: "block", zIndex: "9999"  }}
          >
            <div className="modal-dialog mx-auto" style={{ maxWidth: "65%" }}>
              <div className="modal-content">
                <div className="modal-header py-2 px-4">
                  <h1 className="modal-title fs-5" id="exampleModalLabel3">
                    Objective Note
                  </h1>
                </div>
                <div>
                  {objectiveNotesList.length > 0 &&
                    objectiveNotesList.map((note, index) => (
                      <div
                        key={index}
                        className="modal-body mx-2 d-flex flex-column align-items-end"
                      >
                        <UiInputBox
                          value={
                            note.objective
                              ? note.objective.replace(/<\/?p>/g, "")
                              : ""
                          }
                          onChange={(value: string) =>
                            updateObjectiveNoteValue(value, index)
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

export default ObjectiveNoteModal;
