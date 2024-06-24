import Link from "next/link";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import WhatsappButton from "../../../../components/WhatsappButton";
import { GrLinkedin } from "react-icons/gr";

export default function Cohort6() {
  const skills = [
    {
      topic: "Web Development",
      description:
        "Participants learn how to create websites using programming languages such as HTML, CSS, and JavaScript. They gain hands-on experience in designing and building interactive and visually appealing web pages.",
      emoji: "🌐",
    },
    {
      topic: "Game Development",
      description:
        "Children are introduced to the fundamentals of game development, including game design principles, programming logic, and graphics creation. They learn how to develop their own games using platforms like Unity or game engines like Scratch.",
      emoji: "🎮",
    },
    {
      topic: "Web3 Technologies",
      description:
        "KCCA exposes participants to emerging technologies such as blockchain and decentralized applications (DApps). They learn about the concepts behind Web3 and how to build decentralized applications using platforms like Ethereum.",
      emoji: "⛓",
    },
    {
      topic: "Animation",
      description:
        "Children learn the principles of animation and how to create animations using digital tools and software. They explore techniques for creating characters, backgrounds, and motion graphics.",
      emoji: "📽️",
    },
    {
      topic: "Robotics",
      description:
        "Participants delve into the world of robotics, learning about hardware components, sensors, and programming languages used in robotics. They engage in hands-on activities to build and program robots to perform various tasks.",
      emoji: "🤖",
    },
    {
      topic: "UI/UX Design",
      description:
        "KCCA teaches participants the principles of user interface (UI) and user experience (UX) design. They learn how to create intuitive and user-friendly interfaces for websites, mobile apps, and other digital platforms.",
      emoji: "🎨",
    },
    {
      topic: "Mobile App Development",
      description:
        "Children learn how to develop mobile applications for iOS and Android devices. They acquire skills in mobile app design, programming languages like Java or Swift, and app deployment to app stores.",
      emoji: "📱",
    },
  ];

  const tracks = [
    {
      name: "KCCA Regular",
      description:
        "This track focuses on Web 2 technologies, providing foundational training in web development, game development, animation, robotics, UI/UX design, and mobile app development. The regular track is free of charge, making it accessible to a wide range of children interested in learning digital skills.",
      emoji: "🆓",
    },
    {
      name: "KCCA Web3",
      description:
        "Designed for participants with prior experience in Web 2 technologies, the Web3 track delves into advanced coding and focuses on Web 3 technologies such as blockchain and decentralized applications (DApps). This track is also free and may be sponsored by web3 tech companies, offering participants the opportunity to explore cutting-edge technologies in the digital space.",
      emoji: "⛓",
    },
    {
      name: "KCCA Prime",
      description:
        "The Prime track is a paid program, although it is highly subsidized to ensure affordability for participants. It serves as a suitability plan for the program, offering additional resources, personalized mentorship, and advanced training to participants who are committed to furthering their skills and pursuing career opportunities in the tech industry.",
      emoji: "💎",
    },
  ];

  const instructors = [
    {
      name: "Andrew Modongho",
      role: "Web Development/Scratch Instructor",
      linkedInProfile: "http://linkedin.com/in/adebola-modongho-130866115",
      photo: "andrew.png",
    },
    {
      name: "Precious Kayili",
      role: "Web Development Instructor",
      linkedinProfile: "https://www.linkedin.com/in/preciouskayili/",
      photo: "presh.png",
    },
    {
      name: "Sanyaolu Adefemi",
      role: "Web Development Instructor",
      linkedInProfile: "https://linkedin.com/in/sanyaoluadefemi",
      photo: "femi.jpeg",
    },
    {
      name: "Michael Onoja Jacob",
      role: "Game Development Instructor",
      linkedInProfile: "https://www.linkedin.com/in/onojamichaeljacob/",
      photo: "michael.jpg",
    },
  ];

  return (
    <>
      <Nav />
      <div className="relative bg-[url('/images/kcca1.jpg')] h-[100vh] bg-cover bg-center overflow-hidden">
        <div
          className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1] bg-black"
          style={{
            background: "rgba(21, 21, 21, 0.6)",
            // "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
          }}
        />
        <div className="relative z-[100] flex flex-col justify-center items-center text-white h-full px-[20px]">
          <h3 className="font-[600] font-montserrat text-[30px] md:text-[64px] leading-[40px] md:leading-[80px] capitalize md:w-[525px] text-center">
            KCCA 2024 Cohort
          </h3>
          <div className="">
            <Link
              href="/registration"
              className="font-[600] text-[16px] font-montserrat text-white bg-primary p-4 w-full md:w-[428px] mt-[40px] mb-[16px] rounded-[4px] block text-center"
            >
              REGISTER NOW
            </Link>
            <p className="font-[400] font-montserrat text-[20px] leading-[28px] text-center">
              over 2000 students already enrolled
            </p>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="px-[20px] md:px-[60px] md:flex justify-between  text-justify mb-[40px] md:mb-[120px] bg-white"
      >
        <article className="flex-1 mr-[20px]">
          <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838 mt-[40px] mb-[16px]">
            About the program
          </h3>
          <p className="font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]">
           {` Kids Code Club Africa (KCCA), an initiative of the Alpha Blue
            Foundation, is dedicated to empowering African children with digital
            and entrepreneurial skills. With a mission to bridge the digital
            divide, foster economic growth, and prepare the youth for the
            digital age's challenges and opportunities, KCCA offers a
            comprehensive program. The Alpha Blue Foundation aims to create a
            brighter future for African children, positioning them as the
            digital heroes of the continent. Through KCCA, children gain
            valuable skills that not only benefit their personal development but
            also contribute to Africa's technological advancement and global
            competitiveness.`}
          </p>
        </article>
        <aside className="flex-1 flex flex-col justify-center h-full relative gap-x-[20px]">
          <div className="md:max-w-[506px] md:absolute right-0 md:top-[40px]">
            <img
              src="/images/kcca-cover.jpg"
              className="max-w-full rounded-md"
              alt=""
            />
          </div>
        </aside>
      </section>

      <section
        id="skills"
        className="px-[20px] md:px-[60px] py-10 justify-between text-justify bg-[#F6F8F7]"
      >
        <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838 mt-[40px] mb-[16px]">
          Skills Development
        </h3>
        <p>
          Participants in Kids Code Club Africa (KCCA) receive training in a
          diverse range of skill sets, ensuring they are well-equipped to excel
          in various aspects of the digital world. These skill sets include:
        </p>

        <div className="flex flex-wrap mt-10 gap-y-10">
          {skills.map((skill) => (
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mx-auto p-6"
              key={skill.emoji}
            >
              <p className="bg-slate-200 mb-4 flex items-center justify-center p-6 rounded-full h-10 w-10 text-lg">
                {skill.emoji}
              </p>
              <h3 className="mb-2 text-lg font-bold">{skill.topic}</h3>
              <p className="text-left text-gray-900 leading-[1.8]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="px-[20px] md:px-[60px] py-10 justify-between text-justify"
      >
        <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838 mt-[40px] mb-[16px]">
          KCCA Tracks
        </h3>
        <p>
          Kids Code Club Africa (KCCA) offers three tracks to cater to the
          diverse needs and interests of participants:
        </p>

        <div className="flex flex-wrap mt-10 gap-y-10">
          {tracks.map((track) => (
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mx-auto p-6"
              key={track.emoji}
            >
              <p className="bg-slate-200 mb-4 flex items-center justify-center p-6 rounded-full h-10 w-10 text-lg">
                {track.emoji}
              </p>
              <h3 className="mb-2 text-lg font-bold">{track.name}</h3>
              <p className="text-left text-gray-900 leading-[1.8]">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="px-[20px] md:px-[60px] py-10 justify-between text-justify"
      >
        <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838 mt-[40px] mb-[16px]">
          Mentors and Instructors
        </h3>

        <div className="flex flex-wrap mt-4 gap-y-10">
          {instructors.map((instructor) => (
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mx-auto p-6"
              key={instructor.linkedInProfile}
            >
              <img
                className="aspect-square object-cover object-top rounded-2xl hover:scale-105 w-full transition-all"
                src={`/images/team/${instructor.photo}`}
              />
              <div className="flex items-center mt-4">
                <h3 className="text-xl font-extrabold">{instructor.name}</h3>
                <a
                  href={instructor.linkedInProfile}
                  target="_blank"
                  className="ml-auto text-xl text-[#0077B5]"
                >
                  <GrLinkedin />
                </a>
              </div>
              <p className="text-left text-gray-900 leading-[1.8]">
                {instructor.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="relative">
        <WhatsappButton />
      </div>
      <Footer />
    </>
  );
}
