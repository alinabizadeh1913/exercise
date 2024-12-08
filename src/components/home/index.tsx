"use client";

import { useRef, useState } from "react";
import Button from "../layout/components/button";
import First from "../layout/components/first";
import Typography from "../layout/components/typography";
import Section from "../layout/section";
import Modal from "../layout/components/modal";
import Last from "../layout/components/last";
import { BreakLoop } from "@/src/utils/break";
import { Continue } from "@/src/utils/continue";

const HomeComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const usernameInput = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"error" | "success" | "text">();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [information, setInformation] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>();
  const handleClick = () => {
    if (usernameInput.current) {
      if (usernameInput.current.value.length < 8) {
        setIsModalOpen(true);
        setStatus("error");
      } else {
        setIsModalOpen(true);
        setStatus("success");
      }
    }
  };
  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {status == "error" ? (
          <div className="bg-[#fff] p-4 w-[500px] rounded-md text-center">
            <Typography color="#f82323" className="text-lg">
              Username must be more than 8 characters
            </Typography>
          </div>
        ) : status == "success" ? (
          <div className="bg-[#ffffff] p-4 w-[400px] text-center rounded-md">
            <Typography color="#1d971b" className="text-lg">
              Login successful!
            </Typography>
          </div>
        ) : (
          <div className="bg-[#ffffff] p-4 w-[400px] text-center rounded-md">
            <Typography color="#333333" className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              pariatur vitae? Qui debitis consequuntur doloribus.
            </Typography>
          </div>
        )}
      </Modal>
      <Section container space="medium">
        <div className="flex flex-col gap-y-2 items-center">
          <div className="w-6/12">
            <div className="flex justify-center">
              <First>
                <Typography>
                  Click the button below to open the medal.
                </Typography>
              </First>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div
                onClick={() => {
                  setIsModalOpen(true);
                  setStatus("text");
                }}
              >
                <Button type="fill">Click Here</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-5/12 px-2">
            <First>
              <input
                type="text"
                className="w-full bg-white p-2 outline-0 text-[#222222] text-center"
                placeholder="please enter your username"
                ref={usernameInput}
              />
            </First>
          </div>
          <div className="w-5/12 px-2">
            <Last>
              <div onClick={handleClick}>
                <Button type="fill">Sign in</Button>
              </div>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex justify-center items-center">
          <div className="w-3/12 px-2">
            <First>
              <Typography>to break a loop</Typography>
            </First>
          </div>
          <div className="w-3/12 px-2">
            <Last>
              <div onClick={BreakLoop}>
                <Button type="fill">Break</Button>
              </div>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex justify-center items-center">
          <div className="w-4/12 px-2">
            <First>
              <Typography>continue of loop (see console)</Typography>
            </First>
          </div>
          <div className="w-4/12 px-2">
            <Last>
              <div onClick={Continue}>
                <Button type="fill">continue</Button>
              </div>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex justify-center items-center">
          <div className="w-4/12 px-2">
            <First>
              <form
                action=""
                className="flex flex-col gap-y-3"
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmit(true);
                  setIsDisable(true);
                  if (usernameRef.current) {
                    usernameRef.current.value = "";
                  }
                  if (emailRef.current) {
                    emailRef.current.value = "";
                  }
                  if (passwordRef.current) {
                    passwordRef.current.value = "";
                  }
                }}
              >
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="username" className="cursor-pointer">
                    <Typography>Username</Typography>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    ref={usernameRef}
                    className={`${
                      isDisable ? "bg-gray-300" : "bg-white"
                    } px-2 outline-0 text-[#222222]`}
                    disabled={isDisable}
                    onInput={(e) => {
                      const username = e.currentTarget.value;
                      setInformation({
                        ...information,
                        username,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="email" className="cursor-pointer">
                    <Typography>Email</Typography>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    className={`${
                      isDisable ? "bg-gray-300" : "bg-white"
                    } px-2 outline-0 text-[#222222]`}
                    disabled={isDisable}
                    onInput={(e) => {
                      const email = e.currentTarget.value;
                      setInformation({
                        ...information,
                        email,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="password" className="cursor-pointer">
                    <Typography>Password</Typography>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    maxLength={14}
                    className={`${
                      isDisable ? "bg-gray-300" : "bg-white"
                    } px-2 outline-0 text-[#222222]`}
                    disabled={isDisable}
                    onInput={(e) => {
                      const password = e.currentTarget.value;
                      setInformation({
                        ...information,
                        password,
                      });
                    }}
                  />
                </div>
                <Button>Submit</Button>
              </form>
            </First>
          </div>
          <div className="w-4/12 px-2">
            <Last>
              {!isSubmit ? (
                <Typography>
                  Please submit the form to see the information
                </Typography>
              ) : (
                <div className="flex flex-col gap-y-2 w-full">
                  <div className="w-full flex justify-between">
                    <div className="w-[40%]">
                      <Typography>Username:</Typography>
                    </div>
                    <div className="w-[50%]">
                      <Typography className="overflow-hidden truncate whitespace-nowrap">
                        {information?.username}
                      </Typography>
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-[40%]">
                      <Typography>Email:</Typography>
                    </div>
                    <div className="w-[50%]">
                      <Typography className="overflow-hidden truncate whitespace-nowrap">
                        {information?.email}
                      </Typography>
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-[40%]">
                      <Typography>Password:</Typography>
                    </div>
                    <div className="w-[50%] ">
                      <Typography className="overflow-hidden truncate whitespace-nowrap">
                        <div className="flex items-center gap-x-[2px]">
                          {information?.password
                            ?.split("")
                            .map((item, index) => (
                              <span key={index}>*</span>
                            ))}
                        </div>
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-x-2 mt-6">
                    <div
                      onClick={() => {
                        setIsDisable(false);
                        setInformation({
                          username: "",
                          email: "",
                          password: "",
                        });
                      }}
                    >
                      <Button>Edit</Button>
                    </div>
                    <div
                      onClick={() => {
                        if (formRef.current) {
                          formRef.current.submit();
                        }
                      }}
                    >
                      <Button>Confirm</Button>
                    </div>
                  </div>
                </div>
              )}
            </Last>
          </div>
        </div>
      </Section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default HomeComponent;
