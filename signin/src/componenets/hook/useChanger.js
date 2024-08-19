import React from "react";
import { useState } from "react";
export const useChanger = () => {
  const [mystate, setMyState] = useState(true);

  const changerSide = () => {
    if (mystate) {
      setMyState(false);
      document.getElementById("right-1").style.display = "none";
      document.getElementById("right-2").style.display = "block";
      document.getElementById("left-1").style.display = "none";
      document.getElementById("left-2").style.display = "block";
      document.getElementById("left-section").classList = "white-to-red";
      document.getElementById("right-section").classList = "red-to-white";
    } else {
      setMyState(true);
      document.getElementById("right-1").style.display = "block";
      document.getElementById("right-2").style.display = "none";
      document.getElementById("left-1").style.display = "block";
      document.getElementById("left-2").style.display = "none";
      document.getElementById("left-section").classList = "red-to-white";
      document.getElementById("right-section").classList = "white-to-red";
    }
  };
  return { changerSide };
};
