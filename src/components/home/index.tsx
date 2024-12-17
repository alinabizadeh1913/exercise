"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../layout/components/button";
import First from "../layout/components/first";
import Typography from "../layout/components/typography";
import Section from "../layout/section";
import Modal from "../layout/components/modal";
import Last from "../layout/components/last";
import { BreakLoop } from "@/src/utils/break";
import { Continue } from "@/src/utils/continue";
import { Script } from "@/src/utils/script";
import Menu from "../layout/menu";
import {
  animatedOnScroll2,
  animationOnScroll,
  handleLinkStatusByScroll,
} from "@/src/utils/scroll";

const HomeComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const usernameInput = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"error" | "success" | "text">();
  const [statusText, setStatusText] = useState<string>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [text1, setText1] = useState<string>();
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

  useEffect(() => {
    handleLinkStatusByScroll();
    animationOnScroll();
    animatedOnScroll2();
  }, []);

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
        ) : status == "text" ? (
          <div className="bg-[#ffffff] p-4 w-[400px] text-center rounded-md">
            <Typography color="#333333" className="text-lg">
              {statusText}
            </Typography>
          </div>
        ) : null}
      </Modal>
      <Menu isShowMenu={isShowMenu} />
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
      <Section container space="medium">
        <div className="flex flex-wrap justify-center">
          <div className="w-3/12 px-2">
            <First>
              <div onClick={Script}>
                <Button>Run Script</Button>
              </div>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-5/12 px-2">
            <First>
              <input
                type="text"
                className="bg-white p-2 outline-0 text-[#222222]"
                onInput={(e) => {
                  const { value } = e.currentTarget;
                  setText1(value);
                }}
              />
            </First>
          </div>
          <div className="w-5/12 px-2">
            <Last>
              <div className="flex flex-col items-center">
                <div>
                  <Typography>{text1}</Typography>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2 justify-center">
                  <div
                    onClick={() => {
                      setText1(text1?.toUpperCase());
                    }}
                  >
                    <Button type="fill">To Uppercase</Button>
                  </div>
                  <div
                    onClick={() => {
                      setText1((text) => {
                        return text?.toLowerCase();
                      });
                    }}
                  >
                    <Button type="fill">To Lowercase</Button>
                  </div>
                  <div
                    onClick={() => {
                      const search = prompt("Enter the text to be included");
                      if (text1?.includes(String(search))) {
                        setIsModalOpen(true);
                        setStatus("text");
                        setStatusText("Text is included");
                      } else {
                        setIsModalOpen(true);
                        setStatus("text");
                        setStatusText("Text is not included");
                      }
                    }}
                  >
                    <Button type="fill">Includes</Button>
                  </div>
                  <div
                    onClick={() => {
                      const firstIndex = prompt("Enter the first index");
                      const lastIndex = prompt("Enter the last index");

                      const result = text1?.substr(
                        Number(firstIndex),
                        Number(lastIndex)
                      );
                      setIsModalOpen(true);
                      setStatus("text");
                      setStatusText(result);
                    }}
                  >
                    <Button type="fill">Substr</Button>
                  </div>
                  <div
                    onClick={() => {
                      const targetText = prompt("Enter the target text");
                      const changeText = prompt("Enter the change text");
                      setText1(
                        text1?.replace(String(targetText), String(changeText))
                      );
                    }}
                  >
                    <Button type="fill">Replace</Button>
                  </div>
                </div>
              </div>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex justify-center">
          <div className="w-1/3">
            <First>
              <div onClick={() => setIsShowMenu(!isShowMenu)}>
                <Button>{!isShowMenu ? "Show Menu" : "Hide Menu"}</Button>
              </div>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div id="section1" className="section flex justify-center">
          <div className="w-8/12 flex flex-col gap-y-4">
            <First>
              <Typography>Section 1</Typography>
            </First>
            <Last>
              <Typography>
                ist the Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ab commodi qui est reiciendis rem quasi, optio aut,
                fugit minima, quis sit non deserunt tempore! Ducimus laborum
                accusantium a voluptatem harum veniam deleniti fugit rerum rem
                doloremque quis quod veritatis nisi, esse dolore, in pariatur
                eum voluptatibus ullam quidem obcaecati est. Voluptates quas
                asperiores obcaecati expedita ad enim molestias nesciunt
                provident nemo atque, voluptatem illo velit quae fugiat
                doloremque pariatur commodi animi non et dicta delectus officia
                recusandae. Similique recusandae laboriosam odit, molestias
                incidunt provident architecto ea, pariatur eos cum corporis.
                Impedit sed, rerum quibusdam explicabo eveniet sequi repudiandae
                officiis velit nobis soluta exercitationem atque non dolore qui
                vitae. Eligendi ratione facere ipsam ipsum minus labore mollitia
                eius, deserunt fuga iste! Possimus libero tenetur culpa officiis
                alias quasi cumque incidunt odit veniam esse iste nam, maxime
                deserunt ex beatae distinctio sit repellendus quisquam
                temporibus iusto explicabo! Asperiores provident iusto suscipit
                aut blanditiis, impedit illum non corrupti quas aspernatur odit
                dolorem excepturi deleniti neque sed atque, modi quidem quod
                pariatur at. Libero doloremque, eos porro dolorem rem, fugit
                omnis magnam quisquam voluptas enim iste exercitationem animi
                optio ipsa illo esse quidem, odit amet? Modi alias ex eum iste
                laborum! Nihil, sit voluptatem. Inventore repudiandae magnam
                nisi laboriosam esse vitae voluptatibus nostrum, facilis unde
                pariatur hic necessitatibus recusandae soluta numquam vel
                perferendis possimus repellendus ab cumque cum, ducimus
                reprehenderit! Asperiores veritatis, vero magnam commodi error
                facilis, est ipsa voluptatibus quae neque quos iste repellendus
                maxime, dolore cupiditate cum vel porro corporis blanditiis?
                recusandae soluta numquam vel perferendis possimus repellendus
                ab cumque cum, ducimus reprehenderit! Asperiores verit Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nisi
                delectus cupiditate sapiente nostrum totam reiciendis quae
                placeat aperiam. Maxime itaque sint molestiae, aliquam iusto
                libero placeat maiores amet? Architecto fugiat beatae voluptates
                porro soluta ipsa nisi dolorem? Laudantium illum voluptatem sit
                odio fugiat quo delectus aut neque nulla aperiam autem maxime in
                dolorum maiores enim quisquam minus molestiae laborum, labore
                sunt mollitia rem deleniti, ipsum rerum. Neque expedita magni
                ad, rerum velit dignissimos. Deleniti fugit voluptate tenetur
                adipisci, id ratione aut in aliquid iusto, cum dolorem
                laboriosam voluptas atque. Fugiat quis, maiores accusamus quas,
                quae incidunt quaerat ex aut saepe ipsum nulla omnis. Reiciendis
                provident excepturi, recusandae, quam illum unde est facere
                assumenda, sequi corporis iste accusamus? Impedit, iste expedita
                laborum harum ut cum.
              </Typography>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div id="section2" className="section flex justify-center">
          <div className="w-8/12 flex flex-col gap-y-4">
            <First>
              <Typography>Section 2</Typography>
            </First>
            <Last>
              <Typography>
                commodi animi non et dicta delectus officia recusandae.
                Similique recusandae laboriosam odit, molestias incidunt
                provident archit Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Hic rerum magnam doloremque libero neque ipsam
                sapiente dolor provident nihil, ducimus cumque, tenetur
                veritatis quisquam rem itaque. Laborum earum neque quaerat.
                Corporis, tenetur saepe? Non facilis totam dignissimos officia
                ratione repellendus dicta dolore, commodi adipisci! Possimus
                eligendi voluptates, omnis nisi, distinctio sit ea doloribus
                labore harum ut qui quas incidunt. Et sequi illo necessitatibus
                neque asperiores ullam aut perferendis sed tempore? Quo magnam
                nobis quis earum consequuntur fugiat est dolore quos voluptates
                ipsum voluptatibus architecto odit animi reiciendis sint, nemo
                ex possimus incidunt esse maiores ratione explicabo minus!
                Aliquam, similique, earum quae qui repudiandae, nesciunt magnam
                labore obcaecati laborum necessitatibus alias doloribus? Nostrum
                ipsam explicabo est sunt quia quo, nesciunt nisi porro
                reprehenderit temporibus officia recusandae nobis esse corrupti
                modi suscipit quae commodi ea facere sint? recusandae soluta
                numquam vel perferendis possimus repellendus ab cumque cum,
                ducimus reprehenderit! Asperiores verit Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Aliquid nisi delectus
                cupiditate sapiente nostrum totam reiciendis quae placeat
                aperiam. Maxime itaque sint molestiae, aliquam iusto libero
                placeat maiores amet? Architecto fugiat beatae voluptates porro
                soluta ipsa nisi dolorem? Laudantium illum voluptatem sit odio
                fugiat quo delectus aut neque nulla aperiam autem maxime in
                dolorum maiores enim quisquam minus molestiae laborum, labore
                sunt mollitia rem deleniti, ipsum rerum. Neque expedita magni
                ad, rerum velit dignissimos. Deleniti fugit voluptate tenetur
                adipisci, id ratione aut in aliquid iusto, cum dolorem
                laboriosam voluptas atque. Fugiat quis, maiores accusamus quas,
                quae incidunt quaerat ex aut saepe ipsum nulla omnis. Reiciendis
                provident excepturi, recusandae, quam illum unde est facere
                assumenda, sequi corporis iste accusamus? Impedit, iste expedita
                laborum harum ut cum.
              </Typography>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div id="section3" className="section flex justify-center">
          <div className="w-8/12 flex flex-col gap-y-4">
            <First>
              <Typography>Section 3</Typography>
            </First>
            <Last>
              <Typography>
                tque, modi quidem quod pariatur at. Libero doloremque, eos porro
                dolorem rem, fugit omnis magnam quisquam voluptas enim iste
                exercitationem animi optio ipsa illo esse quidem, odit amet?
                Modi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos vero facere quidem. Ducimus eius mollitia incidunt quos,
                nihil et ipsum natus? Nisi numquam vitae doloribus sed
                temporibus quasi possimus est hic quaerat earum molestiae, optio
                sit delectus voluptate nulla officiis eligendi fugit sapiente,
                neque quam repellat magnam ipsum. Iusto, maiores. Cupiditate
                quis ut debitis tenetur atque reiciendis non earum itaque
                quibusdam. Necessitatibus cumque amet minima sequi quae, eos
                quos facere reprehenderit error, cum, harum nemo corporis.
                Eligendi, tempore est! Consequuntur unde voluptatum placeat
                sapiente nam nisi aliquid ea perferendis illo? At commodi magni
                eligendi, inventore quasi nobis iusto tempore? Optio, nam
                mollitia obcaecati voluptatem, at officiis provident dicta
                aliquam odit a dolore quam cum natus. Asperiores atque quis quia
                illum? recusandae soluta numquam vel perferendis possimus
                repellendus ab cumque cum, ducimus reprehenderit! Asperiores
                verit Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid nisi delectus cupiditate sapiente nostrum totam
                reiciendis quae placeat aperiam. Maxime itaque sint molestiae,
                aliquam iusto libero placeat maiores amet? Architecto fugiat
                beatae voluptates porro soluta ipsa nisi dolorem? Laudantium
                illum voluptatem sit odio fugiat quo delectus aut neque nulla
                aperiam autem maxime in dolorum maiores enim quisquam minus
                molestiae laborum, labore sunt mollitia rem deleniti, ipsum
                rerum. Neque expedita magni ad, rerum velit dignissimos.
                Deleniti fugit voluptate tenetur adipisci, id ratione aut in
                aliquid iusto, cum dolorem laboriosam voluptas atque. Fugiat
                quis, maiores accusamus quas, quae incidunt quaerat ex aut saepe
                ipsum nulla omnis. Reiciendis provident excepturi, recusandae,
                quam illum unde est facere assumenda, sequi corporis iste
                accusamus? Impedit, iste expedita laborum harum ut cum.
              </Typography>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div id="section4" className="section flex justify-center">
          <div className="w-8/12 flex flex-col gap-y-4">
            <First>
              <Typography>Section 4</Typography>
            </First>
            <Last>
              <Typography>
                illo velit quae fugiat doloremque pariatur commodi animi non et
                dicta delectus officia recusandae. Similique recusandae labo
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                ab! Dolorem tempora laboriosam recusandae provident, repellendus
                aliquam minima ipsum accusantium eum iusto voluptatum ipsa
                quidem odio consequatur veritatis, nemo reprehenderit obcaecati!
                Ullam eligendi neque ea rerum pariatur consequatur explicabo
                ipsa minus itaque magni inventore reprehenderit aliquam expedita
                maxime non veniam, quo quis perferendis et error nesciunt
                incidunt ut culpa at. Cum iste molestias alias nostrum quos
                fugit rem atque, aliquam dolore, sint labore doloremque itaque
                omnis deserunt nemo vitae laboriosam nisi ipsam. Eum quibusdam
                cumque quasi nulla, hic quo amet exercitationem dolores aperiam
                iusto deserunt ad quos pariatur ratione debitis deleniti!
                Tempore libero voluptatibus rerum laudantium ab, aperiam animi
                illum neque iure possimus beatae corrupti ipsam tempora ipsum
                eligendi dolorum suscipit, dicta reiciendis repellat? Unde velit
                pariatur laudantium voluptas optio. recusandae soluta numquam
                vel perferendis possimus repellendus ab cumque cum, ducimus
                reprehenderit! Asperiores verit Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aliquid nisi delectus cupiditate
                sapiente nostrum totam reiciendis quae placeat aperiam. Maxime
                itaque sint molestiae, aliquam iusto libero placeat maiores
                amet? Architecto fugiat beatae voluptates porro soluta ipsa nisi
                dolorem? Laudantium illum voluptatem sit odio fugiat quo
                delectus aut neque nulla aperiam autem maxime in dolorum maiores
                enim quisquam minus molestiae laborum, labore sunt mollitia rem
                deleniti, ipsum rerum. Neque expedita magni ad, rerum velit
                dignissimos. Deleniti fugit voluptate tenetur adipisci, id
                ratione aut in aliquid iusto, cum dolorem laboriosam voluptas
                atque. Fugiat quis, maiores accusamus quas, quae incidunt
                quaerat ex aut saepe ipsum nulla omnis. Reiciendis provident
                excepturi, recusandae, quam illum unde est facere assumenda,
                sequi corporis iste accusamus? Impedit, iste expedita laborum
                harum ut cum.
              </Typography>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div id="section5" className="section flex justify-center">
          <div className="w-8/12 flex flex-col gap-y-4">
            <First>
              <Typography>Section 5</Typography>
            </First>
            <Last>
              <Typography>
                recusandae soluta numquam vel perferendis possimus repellendus
                ab cumque cum, ducimus reprehenderit! Asperiores verit Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nisi
                delectus cupiditate sapiente nostrum totam reiciendis quae
                placeat aperiam. Maxime itaque sint molestiae, aliquam iusto
                libero placeat maiores amet? Architecto fugiat beatae voluptates
                porro soluta ipsa nisi dolorem? Laudantium illum voluptatem sit
                odio fugiat quo delectus aut neque nulla aperiam autem maxime in
                dolorum maiores enim quisquam minus molestiae laborum, labore
                sunt mollitia rem deleniti, ipsum rerum. Neque expedita magni
                ad, rerum velit dignissimos. Deleniti fugit voluptate tenetur
                adipisci, id ratione aut in aliquid iusto, cum dolorem
                laboriosam voluptas atque. Fugiat quis, maiores accusamus quas,
                quae incidunt quaerat ex aut saepe ipsum nulla omnis. Reiciendis
                provident excepturi, recusandae, quam illum unde est facere
                assumenda, sequi corporis iste accusamus? Impedit, iste expedita
                laborum harum ut cum. recusandae soluta numquam vel perferendis
                possimus repellendus ab cumque cum, ducimus reprehenderit!
                Asperiores verit Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Aliquid nisi delectus cupiditate sapiente
                nostrum totam reiciendis quae placeat aperiam. Maxime itaque
                sint molestiae, aliquam iusto libero placeat maiores amet?
                Architecto fugiat beatae voluptates porro soluta ipsa nisi
                dolorem? Laudantium illum voluptatem sit odio fugiat quo
                delectus aut neque nulla aperiam autem maxime in dolorum maiores
                enim quisquam minus molestiae laborum, labore sunt mollitia rem
                deleniti, ipsum rerum. Neque expedita magni ad, rerum velit
                dignissimos. Deleniti fugit voluptate tenetur adipisci, id
                ratione aut in aliquid iusto, cum dolorem laboriosam voluptas
                atque. Fugiat quis, maiores accusamus quas, quae incidunt
                quaerat ex aut saepe ipsum nulla omnis. Reiciendis provident
                excepturi, recusandae, quam illum unde est facere assumenda,
                sequi corporis iste accusamus? Impedit, iste expedita laborum
                harum ut cum.
              </Typography>
            </Last>
          </div>
        </div>
      </Section>
      <Section container space="medium">
        <div className="flex justify-center">
          <div className="w-1/2">
            <First>
              <Typography>Animation on scroll</Typography>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="large">
        <div className="animation flex justify-center">
          <div className="w-1/2">
            <First>
              <Typography className="text">Animation of 1</Typography>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="small">
        <div className="animation flex justify-center">
          <div className="w-1/2">
            <First>
              <Typography className="text">Animation of 2</Typography>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="small">
        <div className="animation flex justify-center">
          <div className="w-1/2">
            <First>
              <Typography className="text">Animation of 3</Typography>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="small">
        <div className="animation flex justify-center">
          <div className="w-1/2">
            <First>
              <Typography className="text">Animation of 4</Typography>
            </First>
          </div>
        </div>
      </Section>
      <Section container space="large">
        <div className="move move1 flex justify-center">
          <div className="w-6/12">
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-y-2">
                <div className="circle w-[10px] h-[10px] bg-white rounded-full"></div>
                <div className="line w-[10px] h-[0px] duration-700 rounded-full"></div>
              </div>
              <div className="content invisible opacity-0 duration-700 p-2 flex items-center justify-center">
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum esse architecto quam consectetur? Magnam ullam
                  mollitia officia quis facilis ad animi placeat neque?
                  Inventore, nihil unde. Esse dolore quia magnam.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section container space="large">
        <div className="move move2 flex justify-center">
          <div className="w-6/12">
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-y-2">
                <div className="circle w-[10px] h-[10px] bg-white rounded-full"></div>
                <div className="line w-[10px] h-[0px] duration-700 rounded-full"></div>
              </div>
              <div className="content invisible opacity-0 duration-700 p-2 flex items-center justify-center">
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum esse architecto quam consectetur? Magnam ullam
                  mollitia officia quis facilis ad animi placeat neque?
                  Inventore, nihil unde. Esse dolore quia magnam.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section container space="large">
        <div className="move move3 flex justify-center">
          <div className="w-6/12">
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-y-2">
                <div className="circle w-[10px] h-[10px] bg-white rounded-full"></div>
                <div className="line w-[10px] h-[0px] duration-700 rounded-full"></div>
              </div>
              <div className="content invisible opacity-0 duration-700 p-2 flex items-center justify-center">
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum esse architecto quam consectetur? Magnam ullam
                  mollitia officia quis facilis ad animi placeat neque?
                  Inventore, nihil unde. Esse dolore quia magnam.
                </Typography>
              </div>
            </div>
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
