import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DummyAvatarImage from "../../assets/images/dummy-carousal-avtar.jpg";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import useChat from "../../hooks/useChat";
import Spinner from "../../components/Spinner";
const carosualOptions = {
  loop: true,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    1280: {
      items: 3,
    },
  },
};

const dummyAppointmentList = [
  {
    id: 1,
    name: "John Carter",
    status: "Emergency appointment",
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    isActive: false,
  },
  {
    id: 2,
    name: "Williomson",
    status: "Emergency appointment",
    startTime: "6:00 PM",
    endTime: "7:00 PM",
    isActive: false,
  },
  {
    id: 3,
    name: "Shawn Hampton",
    status: "Emergency appointment",
    startTime: "4:30 PM",
    endTime: "5:00 PM",
    isActive: false,
  },
];
const currentTime = new Date()
  .toLocaleTimeString("en-US", { hour12: true })
  .toUpperCase();

const Appoitments: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppoitments] = useState<any[]>([]);
  const { setCurrentAppointment } = useChat();

  const api = useApi();
  const getDoctorAppoitments = async () => {
    try {
      await api.get("doctor/appointments");
    } catch (error) {
      console.log(error);
    }
    let reOrderAppointments: Array<any> =
    appoitmentsHandler(dummyAppointmentList);
    setAppoitments(reOrderAppointments);
    setIsLoading(false);
  };
  const appoitmentsHandler = (appointmentsList: Array<any> = []) => {
    appointmentsList?.forEach((el, index) => {
      if (el.startTime <= currentTime && el.endTime >= currentTime) {
        const currentTimeAppointment = appointmentsList.splice(index, 1)[0];
        currentTimeAppointment.isActive = true;
        appointmentsList.splice(1, 0, currentTimeAppointment);
        setCurrentAppointment(currentTimeAppointment)
      }
    });
    return appointmentsList;
  };

  useEffect(() => {
    setIsLoading(true);
    getDoctorAppoitments();
  }, []);
  return (
    <>
      <div className="box">
        <div className="box-header">
          <h4 className="box-title fs-16 ">
            Upcoming Telemedicine Appointments
          </h4>
        </div>
        {isLoading ? (
          <div className="d-flex justify-content-center py-5">
            <Spinner />
          </div>
        ) : (
          <div className="box-body carousal-container">
            <OwlCarousel
              className="owl-theme owl-sl"
              {...carosualOptions}
              margin={10}
            >
              {appointments?.map((appoitment, index) => {
                return (
                  <div key={index} className="pe-10 ps-10">
                    <div className="d-flex align-items-center mb-10">
                      <div className="me-15">
                        <img
                          src={DummyAvatarImage}
                          className="avatar avatar-lg rounded10 bg-primary-light"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1 fw-500">
                        <p className="hover-primary text-fade mb-1 fs-12">
                          {appoitment.name}{" "}
                        </p>
                        <span className="text-dark fs-14 d-flex  align-items-center">
                          {appoitment.status}
                          {appoitment.isActive && <div>&nbsp; - Active</div>}
                        </span>
                      </div>
                      <div>
                        <button
                          onClick={() => setCurrentAppointment(appoitment)}
                          className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm d-flex justify-content-center align-items-center"
                        >
                          <span className="material-symbols-outlined fs-12">
                            call
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end  py-10 ">
                      <div>
                        <p className="mb-0 text-muted fs-12 d-flex justify-content-center align-items-center">
                          <span className="material-symbols-outlined margin-right-5 fs-14">
                            schedule
                          </span>{" "}
                          {appoitment.startTime}{" "}
                          <span className="mx-20">$ 30</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        )}
      </div>
    </>
  );
};

export default Appoitments;
