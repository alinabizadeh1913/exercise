"use client";

import { counters } from "@/src/utils/counter";
import { useEffect } from "react";

const Last = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="last flex w-full">
      <div className="w-full border-2 border-[#333333] p-4 flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default Last;
