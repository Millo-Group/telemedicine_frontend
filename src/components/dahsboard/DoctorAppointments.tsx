import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DummyAvatarImage from "../../assets/images/dummy-carousal-avtar.jpg";
import React from "react";
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

const users = [
  {
    name: "Shawn Hampton",
    status: "Emergency appointment",
  },
  {
    name: "Shawn Hampton",
    status: "Emergency appointment",
  },
  {
    name: "Shawn Hampton",
    status: "Emergency appointment",
  },
];

const Appoitments: React.FC = () => {
  return (
    <>
      <div className="box">
        <div className="box-header">
          <h4 className="box-title fs-16">
            Upcoming Telemedicine Appointments
          </h4>
        </div>
        <div className="box-body carousal-container">
          <OwlCarousel
            className="owl-theme owl-sl"
            {...carosualOptions}
            margin={10}
          >
            {users?.map((user, index) => {
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
                        {user.name}
                      </p>
                      <span className="text-dark fs-14">{user.status}</span>
                    </div>
                    <div>
                      <a
                        href="/#"
                        className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm d-flex justify-content-center align-items-center "
                      >
                        <span className="material-symbols-outlined fs-12">
                          call
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end  py-10 ">
                    <div>
                      <p className="mb-0 text-muted fs-12 d-flex justify-content-center align-items-center">
                        <span className="material-symbols-outlined margin-right-5 fs-14">
                          schedule
                        </span>{" "}
                        10:00 <span className="mx-20">$ 30</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Appoitments;
