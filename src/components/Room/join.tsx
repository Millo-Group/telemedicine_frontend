import React from "react";
import Meeting from "../Meeting";
import { useParams } from "react-router-dom";
import { useApp } from "../../providers/AppProvider";

const Join = () => {
  const { room = "" } = useParams();
  const { jitsi_token } = useApp();
  return <Meeting roomName={room} jwt={jitsi_token} />;
};

export default Join;
