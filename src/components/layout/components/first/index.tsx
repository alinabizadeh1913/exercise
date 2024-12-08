"use client";

import { counters } from "@/src/utils/counter";
import { useEffect } from "react";

const First = ({ children }: { children?: React.ReactNode }) => {
  useEffect(() => {
    counters();
  }, []);

  return (
    <div className="first flex gap-x-1">
      <div className="number w-[45px] flex justify-center items-center text-center bg-color-2 text-white"></div>
      <div className="w-[calc(100%-45px)] bg-[#333333] p-4 border-2 border-white flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default First;
