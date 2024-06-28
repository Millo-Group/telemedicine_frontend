
type Props = {
  heading: string;
}
const UnavailableItem: React.FC<Props> = (props) => {
const {heading} = props;
  return (
    <>
      <div className="p-15 d-flex justify-content-between align-items-center">
        <div className="temp-tab">
          <h4 className="box-title margin-b-5 fs-16">{heading}</h4>
          <p className="text-fade margin-b-5 fs-12">
            --Data Unavailable--
          </p>
        
        </div>
      </div>
    </>
  );
};

export default UnavailableItem;
