import Link from "next/link";
import Section from "../section";
import Typography from "../components/typography";

const Menu = ({ isShowMenu }: { isShowMenu?: boolean }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 pt-[40px] duration-300 ${
        isShowMenu ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <Section container>
        <div
          className="p-8 border border-[#E5E5E5] border-b-[5px] rounded-[25px] bg-[#ffffff1e] backdrop-blur-[10px]"
          style={{
            boxShadow: "inset 0px 0px 15px #ffffff66",
          }}
        >
          <div id="main-menu" className="flex justify-center gap-x-[60px]">
            <Link
              href="#section1"
              className="relative flex justify-center"
            >
              <Typography className="text-[24px]">Section1</Typography>
              <div className="circle absolute bottom-[-10px] w-[12px] h-[12px] rounded-full bg-white"></div>
            </Link>
            <Link href="#section2" className="relative flex justify-center">
              <Typography className="text-[24px]">Section2</Typography>
              <div className="circle absolute bottom-[-10px] w-[12px] h-[12px] rounded-full bg-white"></div>
            </Link>
            <Link href="#section3" className="relative flex justify-center">
              <Typography className="text-[24px]">Section3</Typography>
              <div className="circle absolute bottom-[-10px] w-[12px] h-[12px] rounded-full bg-white"></div>
            </Link>
            <Link href="#section4" className="relative flex justify-center">
              <Typography className="text-[24px]">Section4</Typography>
              <div className="circle absolute bottom-[-10px] w-[12px] h-[12px] rounded-full bg-white"></div>
            </Link>
            <Link href="#section5" className="relative flex justify-center">
              <Typography className="text-[24px]">Section5</Typography>
              <div className="circle absolute bottom-[-10px] w-[12px] h-[12px] rounded-full bg-white"></div>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Menu;
