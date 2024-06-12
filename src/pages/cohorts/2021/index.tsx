import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";

export default function Cohort3() {
  return (
    <>
      <Nav />
      <div className="relative bg-[url('/images/kcca9.JPG')] h-[100vh] bg-cover bg-center overflow-hidden">
        <div
          className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1] bg-black"
          style={{
            background: "rgba(21, 21, 21, 0.6)",
            // "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
          }}
        />
        <div className="relative z-[100] flex flex-col justify-center items-center text-white h-full px-[20px]">
          <h3 className="font-[600] font-montserrat text-[30px] md:text-[64px] leading-[40px] md:leading-[80px] capitalize md:w-[525px] text-center">
            KCCA 2021 Cohort
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
