"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d7d8d488-d02d-4d61-9ed5-650b04ab6e6");
  });

  return null;
}

export default CrispChat;

// Cnso