import React, { useEffect } from "react";
import Meeting from "../Meeting";
import { Navigate, useLocation, useParams } from "react-router-dom";

function Join() {
  const { room = "" } = useParams();
  const { state } = useLocation();
  console.log(state, "state");
  // if (!state) return <Navigate to="/authenticate" />;
  // Set JWT when we have real one
  // jwt={state?.jwt}
  return <Meeting roomName={room} jwt={"1111"} />;
}

export default Join;
