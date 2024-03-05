import TemperatureImage from "../../../assets/images/check-2.png";
import moment from "moment";
interface Props {
  bp: any;
}
const BPItem: React.FC<Props> = ({ bp }) => {
  const formatDate = (date: string) => {
    return moment(date).utcOffset(date).format("DD MMM YYYY");
  };

  return (
    <>
      <div className="p-15 d-flex justify-content-between align-items-center">
        <div className="temp-tab">
          <h4 className="box-title margin-b-5 fs-16">Blood Pressure</h4>
          <p className="text-fade margin-b-5 fs-14">
            {formatDate(bp.timestamp)}
          </p>
          <p className="m-0 inblock fs-14">{bp.patient_name}</p>
        </div>
        <div className="box-controls pull-right">
          <span className="text-primary">{bp.value}.C</span>
          <div className="avatar avatar-xxl">
            <img src={TemperatureImage} alt="temperature" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BPItem;
