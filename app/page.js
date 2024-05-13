import BannerBoy from "@/public/home-banner-boy.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[703px] max-w-[1380px] mx-auto border rounded-[32px] bg-[url('../public/banner.png')]  bg-no-repeat bg-cover ">
        <div className="flex">
          <div className="flex max-w-[788px] flex-col items-start gap-8 mt-[150px] ml-[93px]">
            <h1 className="text-white text-[64px] font-semibold leading-[84px]">
              The best place to invest in your knowledge.
            </h1>
            <p className="text-white text-2xl leading-[34px] font-medium">
              Welcome to our university is website! Use the search bar below to
              explore our diverse range of programs.
            </p>
            <div className="flex items-start gap-[12px]">
              <div className="flex items-start">
                <button className="flex py-3 px-6 justify-center items-center gap-4 border rounded-lg bg-component-fill-light">
                  <span className="text-component-text-primary">Admit now</span>
                </button>
              </div>
              <div className="flex items-start">
                <button className="flex py-3 px-6 justify-center items-center gap-4 border rounded-lg bg-component-fill-light">
                  <span className="text-component-text-secondary">
                    View academic info
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[65px] flex-shrink-0">
            <Image src={BannerBoy} />
          </div>
        </div>
      </div>
      <div className="flex w-[1440px] py-[80px] px-[120px] mx-auto justify-between items-start">
        <div className="flex flex-col items-start gap-3 flex-grow-1 flex-shrink-0 basis-0">
          <h3 className="w-[486px] text-typography-display text-5xl font-medium leading-[64px]">
            About Falar University
          </h3>
          <p className="text-container-text-secondary text-[18px] font-medium leading-7">
            Welcome to our university is website!{" "}
          </p>
        </div>
        <div className="flex w-[588px] flex-col gap-6 flex-shrink-0">
          <p className="self-stretch text-typography-body-soft text-[18px] leading-7">
            Welcome to our university is website! Use the search bar below to
            explore our diverse range of programs. Gathering the most complete
            offer of training programmes in Canada, the 14 Facilities of the
            Falar offer unique conditions to those who want to build an academic
            path of excellence and properly valued by the labour market.
          </p>
          <div className="">
            <button className="flex items-center gap-2">
              <span className="text-component-text-primary font-medium leading-6">More about us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.8067 9.53987L16.125 5.90571C15.71 5.49571 15 5.78654 15 6.36571V9.16654H0.833333C0.3725 9.16654 0 9.53987 0 9.99987C0 10.4599 0.3725 10.8332 0.833333 10.8332H15V13.634C15 14.2132 15.71 14.504 16.125 14.094L19.8067 10.4599C20.0642 10.2057 20.0642 9.79404 19.8067 9.53987Z"
                  fill="#D33C85"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
