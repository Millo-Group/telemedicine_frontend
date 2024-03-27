import React from "react";

interface props {
  eventDetails?: any;
}
const PatientInputFrom: React.FC<props> = ({ eventDetails }) => {
  const fields = [
    {
      label: "Name",
      type: "text",
      value: eventDetails.display_name,
      ariaLabel: "Name",
      id: "validationCustom01",
      required: true,
    },
    {
      label: "Date of Birth",
      type: "date",
      value: eventDetails.birth_date,
      ariaLabel: "Date of birth",
      required: true,
    },
    {
      label: "Race",
      type: "text",
      value: eventDetails.race,
      ariaLabel: "Race",
      required: true,
    },
    {
      label: "Sex",
      type: "gender",
      value: eventDetails.gender,
      ariaLabel: "Sex",
      required: true,
    },
    {
      label: "Age",
      type: "date",
      value: eventDetails.age,
      ariaLabel: "Age",
      required: true,
    },
    {
      label: "Birth weight",
      type: "text",
      value: eventDetails.birth_weight,
      ariaLabel: "Birth weight",
      required: true,
    },
    {
      label: "Allergies",
      type: "text",
      value: eventDetails.allergic_to_1,
      ariaLabel: "Allergies",
      required: true,
    },
    {
      label: "Insurance",
      type: "text",
      value: eventDetails.primary_insurance_carrier_name,
      ariaLabel: "Insurance",
      required: true,
    },
  ];

  const formFields = fields.map((field, index) => (
    <div className="col-6 py-2" key={index}>
      <input
        type={field.type}
        className="form-control"
        placeholder={field.value}
        value={field.value}
        aria-label={field.ariaLabel}
        id={field.id}
        required={field.required}
        disabled={true}
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
  return (
    <form className="d-flex flex-column mb-2 needs-validation">
      <div className="row">{formFields}</div>
    </form>
  );
};

export default PatientInputFrom;
