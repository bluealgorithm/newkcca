import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";
import Link from "next/link";

const Timetable = ({ duration, title, description }: any) => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <p className="font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] md:w-[150px]">
        {duration}
      </p>
      <div className="md:ml-[140px]">
        <p className="font-[700] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[16px]">
          {title}
        </p>
        <p className="font-[400] font-montserrat text-[14px] leading-6 text-[#3c3838] mb-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Nav />
      <div className="relative bg-[url('/images/kcca.jpg')] h-[100vh] bg-cover bg-center overflow-hidden">
        <div
          className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1] bg-black"
          style={{
            background: "rgba(21, 21, 21, 0.6)",
            // "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
          }}
        />
        <div className="relative z-[100] flex flex-col justify-center items-center text-white h-full px-[20px]">
          <h3 className="font-[600] font-montserrat text-[30px] md:text-[64px] leading-[40px] md:leading-[80px] capitalize md:w-[525px] text-center">
            Raising the Next African Digital Heroes
          </h3>
          <div className="">
            <Link
              href="/application"
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
        className="px-[20px] mt-12 md:px-[60px] md:flex justify-between  text-justify mb-[40px] md:mb-[120px] bg-white"
      >
        <article className="flex-1 mr-[20px]">
          <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]">
            About the program
          </h3>
          <p className="font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]">
            {`Kids Code Club Africa (KCCA), an initiative of the Alpha Blue
            Foundation, is dedicated to empowering African children with digital
            and entrepreneurial skills. With a mission to bridge the digital
            divide, foster economic growth, and prepare the youth for the
            digital age's challenges and opportunities, KCCA offers a
            comprehensive program. The Alpha Blue Foundation aims to create a
            brighter future for African children, positioning them as the
            digital heroes of the continent. Through KCCA, children gain
            valuable skills that not only benefit their personal development but
            also contribute to Africa's technological advancement and global`}
            competitiveness.
          </p>
          {/* </section> */}
          <div id="feature">
            <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]">
              Program Description:
            </h3>
            <p className="font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]">
              {`Kids Code Club Africa (KCCA) is a free, practical digital
              capacity-building and entrepreneurship program that operates
              annually. The program kicks off with a Summer Boot Camp,
              (physical) a five-week intensive coding class designed to equip
              children with the necessary digital skills and tools to kickstart
              their careers in technology. Following the boot camp, participants
              engage in a one-year post-boot camp training and mentorship
              program, which can be conducted either virtually or in person.`}
            </p>
            <p className="font-[500] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]">
              {`Each KCCA member is assigned a mentor who guides them through
              their journey in tech. Participants are expected to develop
              personal and group projects during their time in KCCA. These
              projects are then pitched at the Kids in Tech Conference and
              Hackathon, where selected projects stand a chance to win up to
              1,000,000 Naira.`}
            </p>
            <p className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]">
              {`The program aims to provide children with practical skills in
              coding and entrepreneurship, preparing them for success in the
              digital age. By offering mentorship, hands-on training, and
              opportunities to showcase their projects, KCCA empowers African
              children to become leaders and innovators in the tech industry.`}
            </p>
          </div>
        </article>
        <aside className="flex-1 flex flex-col justify-center h-full relative mt-[20px] gap-x-[20px]">
          <div className="md:max-w-[506px] md:absolute right-0 md:top-[100px]">
            <img
              src="/images/front.JPG"
              className="max-w-full rounded-md"
              alt=""
            />
          </div>
          <div className="md:max-w-[506px] md:absolute right-[0px] md:top-[500px]">
            <img src="/images/front2.jpg" className=" rounded-md " alt="" />
          </div>
        </aside>
      </section>

      <section
        id="mission"
        className="px-[20px] md:px-[60px] text-justify bg-[#F6F8F7] py-[30px] md:py-[70px]"
      >
        <h3 className="font-[600] font-montserrat text-base border bg-slate-100 w-fit rounded-full px-5 py-1 text-[#3c3838] mb-[16px]">
          Our Mission
        </h3>
        <blockquote className="text-xl">
          To become a leading provider of digital and STEM education training
          and mentorship for African children.
        </blockquote>
      </section>

      <section
        id="mission"
        className="px-[20px] md:px-[60px] text-justify py-[30px] md:py-[70px]"
      >
        <h3 className="font-[600] font-montserrat text-base border mx-auto bg-slate-100 w-fit rounded-full px-5 py-1 text-[#3c3838] mb-[16px]">
          Our Vision
        </h3>
        <blockquote className="text-xl text-center w-full md:w-[30rem] mx-auto">
          To advance technology in Africa through child tech empowerment and
          contribute to her growth and economy through innovative technologies.
        </blockquote>
      </section>

      <section
        id="about"
        className="px-[20px] md:px-[60px] md:flex justify-between text-justify mb-[40px] md:mb-[120px] bg-white"
      >
        <article className="flex-1 mr-[20px]">
          <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]">
            Program Objectives
          </h3>
          <ol className="list-decimal space-y-4 font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[10px]">
            <li>
              Address the critical issue of unemployment in Africa, particularly
              in Nigeria.
            </li>
            <li>
              Strengthen families by alleviating poverty and reducing sickness.
            </li>
            <li>
              Advance Africa in technology and contribute to its economic growth
              through ICT and technological innovation.
            </li>
            <li>Promote digital inclusion in the global labour market.</li>
            <li>
              Inspire and encourage children to learn and excel in technology.
            </li>
          </ol>
        </article>
      </section>

      <section
        id="eligibility"
        className="px-[20px] md:px-[60px] text-justify bg-white py-[30px] md:py-[70px] flex flex-col md:flex-row gap-x-[40px] items-center"
      >
        <article className="flex-1">
          <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]">
            To be eligible for the KCCA programme:
          </h3>

          <ul className="ml-[15px]">
            <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
              {"Participants must be between 9 – 17 years’ old"}
            </li>
            <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
              {`Should be computer literate (must be able to know basic computer
              operations)`}
            </li>
            <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
              Must have the willingness to learn.
            </li>
            <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
              Should have access to the internet and a computer
            </li>
            <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
              Should be a Club Member
            </li>
          </ul>
        </article>
        <aside className="flex-1">
          <div className="md:max-w-[506px] md:ml-40">
            <img
              src="/images/kcca7.JPG"
              className="max-w-full rounded-md"
              alt=""
            />
          </div>
        </aside>
      </section>

      <section
        id="benefit"
        className="px-[20px] md:px-[60px] text-justify bg-[#F6F8F7] py-[30px] md:py-[70px]"
      >
        <h3 className="font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]">
          Benefits of Joining KCCA
        </h3>
        <ul className="ml-[15px]">
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Access to Free digital capacity development for three years
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Access to a Free lifetime membership
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Access to free mentorship from digital experts and professionals
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Free entrance into the hackathon project after displaying commitment
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Access to any international and national digital competitions
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Free inclusion in the international digital tours programs of KCCA
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            {`Access to all ALPHA BLUE FOUNDATION and KCCA’s programs and African
            affiliate hubs in partnership with Alpha Blue to participate in
            competitions and carry out activities/tasks when assigned`}
          </li>
          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Opportunities to network and connect with digital tech peers to be
            able to share experiences as they grow in the digital ecosystem
          </li>

          <li className="font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]">
            Free access to the ABF/KCCA Hubs in Jos City Nigeria
          </li>
        </ul>
      </section>
      <div className="relative">
        <WhatsappButton />
      </div>
      <Footer />
    </>
  );
};

export default Index;
