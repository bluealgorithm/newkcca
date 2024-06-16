import React, { useState } from "react";
// import logo from '/images/logo.png';
import Link from "next/link";
import { useRouter } from "next/router";
import { GrFacebook, GrLinkedin, GrMenu, GrTwitter } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { FaArrowDown} from 'react-icons/fa'
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [joinDropDown, setJoinDropDown] = useState(false);
  const [cohortDropdown, setCohortDropDown] = useState(false);

  const currentPath = useRouter().pathname;
  const handleMenu = () => {
    // console.log('clicked');
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  const handleJoin = () => {
    if (joinDropDown) {
      setJoinDropDown(false);
      setDropDown(false);
    } else {
      setJoinDropDown(true);
    }
  };
  const handleDropDown = () => {
    if (dropDown) {
      setDropDown(false);
      setJoinDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  // console.log(currentPath);

  return (
    <nav>
      <div className="flex flex-col md:flex-row gap-y-[10px] pt-[10px] min-h-[56px] items-center justify-between px-[20px] md:px-[120px] bg-white border-b border-[#d4d4d4] pb-2 md:pb-0 text-black">
        <div className="flex flex-col md:flex-row items-center gap-y-[10px] gap-x-[43px] ">
          <div className="flex gap-2 items-center">
            <img src="/images/icons/mail.png" alt="" />
            <a
              href="mailto:kidscodeclubafrica@gmail.com"
              className="font-montserrat font-[400] text-[16px] leading-[24px]"
            >
              kidscodeclubafrica@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/icons/phone.png" alt="" />
            <a
              href="tel:+2347018245477"
              className="font-montserrat font-[400] text-[16px] leading-[24px]"
            >
              +234 701 8245 477
            </a>
          </div>
        </div>
        <div className="flex items-center gap-x-[25px] font-primary bg-primary_blue-100">
          <a
            href="https://web.facebook.com/alphabluefoundations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/facebook.png"
              alt="facebook_icon"
              // className='h-[16px] w-[20px]'
            />
            {/* <GrFacebook /> */}
          </a>
          <a
            href="https://twitter.com/AlphaBlueNGO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/twitter.png"
              alt="twitter_icon"
              // className='mx-[16px] h-[16px] w-[20px]'
            />
            {/* <GrTwitter /> */}
          </a>
          <a
            href="https://www.linkedin.com/company/alpha-blue-foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/youtube.png"
              alt="youtube_icon"
              // className='h-[16px] w-[20px]'
            />
            {/* <GrLinkedin /> */}
          </a>
        </div>
      </div>
      <div className="py-3 md:px-[120px] px-[18px] bg-white md:h-[88px] w-screen mb-1 md:flex md:items-center md:justify-between text-2xl">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              className=" h-[100px] ml-[-35px] w-[150px]"
              alt="alpha blue logo"
            />
          </Link>
          <span className="text-3xl cursor-pointer mx-3 md:hidden block">
            <GrMenu onClick={handleMenu} />
          </span>
        </div>
        <ul
          className={`${
            menu ? "top-[180px] pb-6 h-screen z-[100]" : "hidden"
          } md:justify-between md:flex md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 text-xl`}
        >
          <li className="md:ml-[45px] md:mr-[27px] my-3 md:my-0 text-black hover:text-primary">
            <Link
              className={`font-montserrat font-[500] text-[16px] duration-500 ${
                currentPath === "/" && "text-primary"
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li
            className="md: mr-[30px] my-3 md:my-0 dropdown"
            onMouseEnter={() => setCohortDropDown(true)}
            onMouseLeave={() => setCohortDropDown(false)}
          >
            <span className="cursor-pointer flex items-center text-black hover:text-primary">
              <span className="mr-3 font-montserrat font-[500] text-[16px]">
                Cohort
              </span>{" "}
              <MdKeyboardArrowDown />
            </span>
            <ul
              className={`dropdown-content  bg-white left-0 py-4  px-4 font-montserrat font-[500] text-[16px] min-w-[150px] text-black`}
            >
              {[
                {
                  cohort: 1,
                  year: 2019,
                },
                {
                  cohort: 2,
                  year: 2020,
                },
                ,
                {
                  cohort: 3,
                  year: 2021,
                },
                {
                  cohort: 4,
                  year: 2022,
                },
                {
                  cohort: 5,
                  year: 2023,
                },
                {
                  cohort: 6,
                  year: 2024,
                },
              ].map((cohortInfo) => (
                <li className="mb-3" key={cohortInfo.year}>
                  <Link
                    className="font-montserrat font-[500] text-[16px] hover:text-primary_blue-200 duration-500"
                    href={`/cohorts/${cohortInfo.year}`}
                  >
                    Cohort {cohortInfo.cohort}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="md:mr-[27px] my-3 md:my-0 text-black hover:text-primary">
            <a
              className="font-montserrat font-[500] text-[16px] hover:text-text_primary duration-500"
              href="https://kidcodeclubafrica.org/gallery"
            >
              Gallery
            </a>
          </li>
          <li className="md:mr-[27px] mt-[35px] md:mt-0 my-3 md:my-0 text-black hover:text-primary">
            <Link
              className="font-[500] text-[16px] duration-500 text-black rounded-[5px]"
              href="/hackathon"
            >
              Hackathon
            </Link>
          </li>
          <li
            className="md: mr-[30px] my-3 md:my-0 relative"
            onMouseEnter={handleDropDown}
            onMouseLeave={() => setDropDown(false)}
          >
            <span className="cursor-pointer flex items-center text-black hover:text-primary">
              <span className="mr-3 font-montserrat font-[500] text-[16px]">
                Account
              </span>{" "}
              <MdKeyboardArrowDown />
            </span>
            <ul
              className={`${
                dropDown ? "top-[20px] opacity-100 pb-6 z-20 " : "hidden"
              } absolute  bg-white left-0 py-4  px-4 font-montserrat font-[500] text-[16px] min-w-[150px]`}
            >
              <li className="mb-3">
                <Link
                  className="font-montserrat font-[500] text-[16px] hover:text-primary_blue-200 duration-500"
                  href="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="md: mr-[30px] my-3 md:my-0 relative "
            onMouseEnter={handleJoin}
            onMouseLeave={() => setJoinDropDown(false)}
          >
            <span className="cursor-pointer flex items-center text-black hover:text-primary">
              <span className="mr-3 font-montserrat font-[500] text-[16px] ">
                Join Us
              </span>{" "}
              <MdKeyboardArrowDown />
            </span>
            <ul
              className={`${
                joinDropDown ? "top-[20px] opacity-100 pb-6 z-20 " : "hidden"
              } absolute  bg-white left-0 py-4  px-4 font-montserrat font-[500] text-[16px] min-w-[150px]`}
            >
              <li className="mb-3">
                <a
                  className="font-montserrat font-[500] text-[16px] hover:text-primary_blue-200 duration-500"
                  href="https://kidcodeclubafrica.org/join-us/as-instructor"
                >
                  As Instructor
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="font-montserrat font-[500] text-[16px] hover:text-primary_blue-200 duration-500"
                  href="https://kidcodeclubafrica.org/join-us/as-partner"
                >
                  As Partner
                </a>
              </li>
            </ul>
          </li>
          {/* <Link
						className='font-montserrat font-[500] text-[16px] hover:text-text_primary duration-500'
						href='/get-in-touch'
					>
						<button className='bg-primary_blue-100 w-[200px] h-[56px] hover:bg-primary_blue-200 text-white duration-500 px-[16px] py-[12px]  rounded mt-3 md:mt-0'>
							Contact Us
						</button>
					</Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
