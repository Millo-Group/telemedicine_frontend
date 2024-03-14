import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DummyAvatarImage from "../../assets/images/dummy-carousal-avtar.jpg";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import useChat from "../../hooks/useChat";
import Spinner from "../../components/Spinner";

const Appoitments: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppoitments] = useState<any[]>([]);
  const { setCurrentAppointment } = useChat();
  const currentDateTime = moment();
  const api = useApi();
  const carosualOptions = {
    loop: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      1280: {
        items: appointments.length < 2 ? 1 : appointments.length < 3 ? 2 : 3,
      },
    },
  };

  const getDoctorAppoitments = async () => {
    try {
      let { data } = await api.get("doctor/appointments");
      let reOrderAppointments: Array<any> = appoitmentsHandler(data);
      setAppoitments(reOrderAppointments);
    } catch (error) {
      let { data } = await api.get(`events/${state.event_id}`);
      let appointmentsArr = [];
      appointmentsArr.push(data);
      let reOrderAppointments: Array<any> = appoitmentsHandler(appointmentsArr);
      setAppoitments(reOrderAppointments);
      console.log(error);
    }
    setIsLoading(false);
  };
  const navigateToCurrentAppointment = (
    appointment: Record<string, any> = {}
  ) => {
    navigate(
      `/authenticate?employee_id=${state.employee_id}&event_id=${appointment.id}`
    );
    setCurrentAppointment(appointment);
  };
  const reorderAppointments = (appointmentsList: Array<any> = []) => {
    appointmentsList.sort((a, b) => {
      const firstDate = new Date(a.start_time);
      const secondDate = new Date(b.start_time);
      return firstDate.getTime() - secondDate.getTime();
    });
    return appointmentsList;
  };
  const appoitmentsHandler = (appointmentsList: Array<any> = []) => {
    const orderedAppointmentsList = reorderAppointments(appointmentsList);
    orderedAppointmentsList?.forEach((el, index) => {
      const startTime = moment(el.start_time, "YYYY-MM-DD HH:mm:ss")
        .format("hh:mm A")
        .toUpperCase();
      const startDate = moment(el.start_time, "YYYY-MM-DD HH:mm:ss").format(
        "YYYY-MM-DD"
      );
      const startDateTime = moment(el.start_time);
      const endDateTime = moment(el.end_time);

      const isCurrentTimeAppointment =
        (currentDateTime.isAfter(startDateTime) ||
          currentDateTime.isSame(startDateTime)) &&
        (currentDateTime.isBefore(endDateTime) ||
          currentDateTime.isSame(endDateTime));

      if (isCurrentTimeAppointment) {
        el.startTime = startTime;
        const currentTimeAppointment = orderedAppointmentsList.splice(
          index,
          1
        )[0];
        currentTimeAppointment.active = true;
        orderedAppointmentsList.splice(1, 0, currentTimeAppointment);
        setCurrentAppointment(currentTimeAppointment);
      } else el.startTime = startDate + " " + startTime;
    });

    return orderedAppointmentsList;
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
                          {appoitment.patient_id[1]}{" "}
                        </p>
                        <span className="text-dark fs-14 d-flex  align-items-center">
                          {appoitment.name}
                          {appoitment.active && <div>&nbsp; - Active</div>}
                        </span>
                      </div>
                      <div>
                        <button
                          disabled={appoitment.id === +state.event_id}
                          onClick={() =>
                            navigateToCurrentAppointment(appoitment)
                          }
                          className={`waves-effect waves-circle btn btn-circle btn-primary-light btn-sm d-flex justify-content-center align-items-center  ${
                            appoitment.id === +state.event_id && "disabled-btn"
                          }`}
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
