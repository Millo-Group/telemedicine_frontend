const inputStyle = {
  minHeight: "106px",
  padding: "10px",
  backgroundColor: "#D0EDDB",
  border: "1px solid #efeffd",
  marginBottom: "1.5rem",
  borderRadius: "10px",
  transition: "5s",
  width: "100%",
  boxShadow: "0 3px 5px 1px rgba(0, 0, 0, 0.05)",
};
interface Props {
  value?: string;
  onChange?: Function;
}
const UiInputBox: React.FC<Props> = ({ value = "", onChange }) => {
  return (
    <textarea
      style={inputStyle}
      value={value}
      onChange={($event) => {
        onChange && onChange($event.target.value);
      }}
    >
      {value}
    </textarea>
  );
};

export default UiInputBox;
