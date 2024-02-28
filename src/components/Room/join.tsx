import React, { useEffect } from "react";
import Meeting from "../Meeting";
import { Navigate, useLocation, useParams } from "react-router-dom";

function Join() {
  const { room = "" } = useParams();
  const { state } = useLocation();
  console.log(state, "state");
  // if (!state) return <Navigate to="/" />;

  return <Meeting roomName={room} jwt={state.jwt} />;
}

export default Join;
