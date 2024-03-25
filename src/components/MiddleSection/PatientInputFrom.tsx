const fields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Name",
    ariaLabel: "Name",
    id: "validationCustom01",
    required: true,
  },
  {
    label: "Date of Birth",
    type: "date",
    placeholder: "Date-of-Birth",
    ariaLabel: "Date of birth",
    required: true,
  },
  {
    label: "Race",
    type: "text",
    placeholder: "Race",
    ariaLabel: "Race",
    required: true,
  },
  {
    label: "Sex",
    type: "text",
    placeholder: "Male",
    ariaLabel: "Sex",
    required: true,
  },
  {
    label: "Age",
    type: "date",
    placeholder: "1-year-old",
    ariaLabel: "Age",
    required: true,
  },
  {
    label: "Birth weight",
    type: "text",
    placeholder: "Birth weight",
    ariaLabel: "Birth weight",
    required: true,
  },
  {
    label: "Allergies",
    type: "text",
    placeholder: "NKDA",
    ariaLabel: "Allergies",
    required: true,
  },
  {
    label: "Insurance",
    type: "text",
    placeholder: "Insurance",
    ariaLabel: "Insurance",
    required: true,
  },
];

const formFields = fields.map((field, index) => (
  <div className="col-6 py-2" key={index}>
    <input
      type={field.type}
      className="form-control"
      placeholder={field.placeholder}
      aria-label={field.ariaLabel}
      id={field.id}
      required={field.required}
      style={{ border: "1px solid #86a4c3", backgroundColor: "#e9ecef" }}
    />
    <label
      htmlFor={field.id}
      className="mb-2 fw-light"
      style={{ fontSize: "14px" }}
    >
      {field.label}
    </label>
    {field.required && <span className="text-danger">*</span>}
  </div>
));
export default function PatientInputFrom() {
  return (
    <form className="d-flex flex-column mb-2 needs-validation">
      <div className="row">{formFields}</div>
    </form>
  );
}
