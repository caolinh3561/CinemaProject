import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";

export default function Result() {
  const ketQuaDatVe = useSelector(
    (state) => state.ticketRoomReducer.ketQuaDatVe
  );
  console.log(ketQuaDatVe);
  return (
    <>
      <Header step={2} />
    </>
  );
}
