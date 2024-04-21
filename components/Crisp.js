"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1ce6d32f-6e8b-4e8e-9dd2-2f7b218fb712");
  });

  return null;
}

export default CrispChat;