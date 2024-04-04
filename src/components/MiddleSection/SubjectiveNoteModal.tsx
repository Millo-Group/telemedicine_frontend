import React, { useState, MouseEventHandler, useEffect } from "react";
import UiInputBox from "./UiInputBox";
import styles from "./index.module.css";
import useApi from "../../hooks/useApi";

interface Props {
  show?: boolean;
  toggleModal?: MouseEventHandler<HTMLButtonElement>;
  notesData: noteType[];
  updateNotes?: Function;
  patientId?: String;
}

interface SubjectiveNote {
  subjective: string;
}

type noteType = SubjectiveNote;

const SubjectiveNoteModal: React.FC<Props> = ({
  show,
  toggleModal,
  notesData,
  updateNotes,
  patientId,
}) => {
  const api = useApi();

  const [subjectiveNotesList, setSubjectiveNotesList] = useState<noteType[]>(
    []
  );

  const updateSubjectiveNoteValue = (value: string, index: number) => {
    setSubjectiveNotesList((oldList) => {
      const newList = [...oldList];
      newList[index].subjective = value;
      return newList;
    });
  };

  const addNewNoteHandler = () => {
    let newNote = { display_name: "", subjective: "" };
    setSubjectiveNotesList((oldList) => {
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
      display_name: note.subjective,
      subjective: note.subjective,
    };

    await api.put(`notes/${note.id}`, payload);
  };
  const addNewNote = async (note: any) => {
    let payload = {
      display_name: note?.display_name || "",
      subjective: note?.subjective || "",
      patient_id: patientId,
    };
    await api.post(`notes`, payload);
    updateNotes && updateNotes();
  };

  useEffect(() => {
    setSubjectiveNotesList(notesData);
  }, [notesData]);

  return (
    <>
      {show && (
        <div>
          <div
            className="modal"
            id="exampleModal2"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog mx-auto" style={{ maxWidth: "65%" }}>
              <div className="modal-content">
                <div className="modal-header py-2 px-4">
                  <h1 className="modal-title fs-5" id="exampleModalLabel2">
                    Subjective Note
                  </h1>
                </div>

                <div>
                  {subjectiveNotesList.length > 0 &&
                    subjectiveNotesList.map((note, index) => (
                      <div
                        key={index}
                        className="modal-body mx-2 d-flex flex-column align-items-end"
                      >
                        <UiInputBox
                          value={
                            note.subjective
                              ? note.subjective.replace(/<\/?p>/g, "")
                              : ""
                          }
                          onChange={(value: string) =>
                            updateSubjectiveNoteValue(value, index)
                          }
                        />
                        <button
                          type="button"
                          style={{ width: "15%" }}
                          className="btn btn-primary"
                          onClick={() => addAndUpdateNoteHandler(note)}
                        >
                          Save
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
                    style={{ width: "14%" }}
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

export default SubjectiveNoteModal;
