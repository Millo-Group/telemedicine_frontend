import React from "react";
import Meeting from "../Meeting";
import {  useParams } from "react-router-dom";
interface Props {
  state: any;
}

const Join: React.FC<Props> = ({ state }) => {
  const { room = "" } = useParams();
  if (!state) return <div>State Not Available</div>;
  return <Meeting roomName={room} jwt={state.jwt} />;
};

export default Join;
