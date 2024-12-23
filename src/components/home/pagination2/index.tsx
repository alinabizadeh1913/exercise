"use client";

import { useState } from "react";
import Typography from "../../layout/components/typography";
import Image from "next/image";

const Pagination2 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
    {
      id: 20,
    },
    {
      id: 21,
    },
    {
      id: 22,
    },
    {
      id: 23,
    },
    {
      id: 24,
    },
    {
      id: 25,
    },
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setTimeout(() => {
        setLoading(true);
      }, 0);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPage = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPage) {
      setTimeout(() => {
        setLoading(true);
      }, 0);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangePage = (index: number) => {
    setTimeout(() => {
      setLoading(true);
    }, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setCurrentPage(index);
  };

  return (
    <div className="flex flex-col w-full min-h-[340px]">
      <div className="flex flex-wrap w-full h-full gap-y-4">
        {!loading ? (
          currentItems.map((item, index) => (
            <div className="w-1/3 px-2">
              <div className="w-full h-[180px] bg-[#494949] rounded-md flex justify-center items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                  <Typography color="#000" className="text-2xl">
                    {item.id}
                  </Typography>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <Image
              src="/images/spinner.svg"
              alt="spinner"
              width={150}
              height={150}
            />
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center gap-x-4 select-none">
        <div className="prev" onClick={() => handlePrevPage()}>
          <Typography
            className={`${
              currentPage == 1 ? "cursor-default" : "cursor-pointer"
            } `}
            color={currentPage == 1 ? "gray" : "white"}
          >
            prev
          </Typography>
        </div>
        <div className="numbers flex gap-x-4">
          {Array(totalPage)
            .fill(0)
            .map((_, index) => (
              <div
                className="number"
                onClick={() => handleChangePage(index + 1)}
              >
                <Typography
                  className={`cursor-pointer ${
                    currentPage == index + 1 ? "underline" : ""
                  }`}
                  color={currentPage == index + 1 ? "white" : "gray"}
                >
                  {index + 1}
                </Typography>
              </div>
            ))}
        </div>
        <div className="next" onClick={() => handleNextPage()}>
          <Typography
            className={`${
              currentPage == totalPage ? "cursor-default" : "cursor-pointer"
            }`}
            color={currentPage == totalPage ? "gray" : "white"}
          >
            next
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Pagination2;
