"use client";

import { useState } from "react";

const Modal = ({
  children,
  isModalOpen,
  setIsModalOpen,
}: {
  children?: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div
        className={`modal fixed top-0 left-0 w-full h-screen z-[1000] bg-[#00000080] ${
          isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        } duration-300`}
      >
        <div className="h-full flex" onClick={handleClick}>
          <div className="m-auto">
            <div
              className={`${
                isModalOpen ? "translate-y-0" : "translate-y-[50px]"
              } duration-300`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
