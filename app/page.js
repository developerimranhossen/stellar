import BannerBoy from "@/public/home-banner-boy.png";
import TeacherWritting from "@/public/teacher-writting.svg";
import StudentWritting from "@/public/student-writting.svg";
import AdmissionBook from "@/public/admission-book.svg";
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
      <div className="max-w-[1440px] px-[120px] mx-auto">
        <div className="flex py-[80px] justify-between items-start">
          <div className="flex flex-col items-start gap-3 flex-grow-1 flex-shrink-0 basis-0">
            <h3 className="w-[486px] text-typography-display text-5xl font-medium leading-[64px]">
              About Falar University
            </h3>
            <p className="text-container-text-secondary text-lg font-medium ">
              Welcome to our university is website!{" "}
            </p>
          </div>
          <div className="flex w-[588px] flex-col gap-6 flex-shrink-0">
            <p className="self-stretch text-typography-body-soft text-lg">
              Welcome to our university is website! Use the search bar below to
              explore our diverse range of programs. Gathering the most complete
              offer of training programmes in Canada, the 14 Facilities of the
              Falar offer unique conditions to those who want to build an
              academic path of excellence and properly valued by the labour
              market.
            </p>
            <div className="">
              <button className="flex items-center gap-2">
                <span className="text-component-text-primary font-medium leading-6">
                  More about us
                </span>
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
        <div className="relative flex w-[1203px] h-[357px flex-shrink-0]">
          <Image src={StudentWritting} fill />
        </div>
        <div className="flex py-[80px] items-start gap-6">
          <div className="flex flex-col items-start gap-6 max-w-[588px]">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-typography-display text-5xl font-medium leading-[64px]">
                Find your program.
              </h2>
              <p className="text-typography-body-soft leading-6">
                Welcome to our university is website! Use the search bar below
                to explore our diverse range of programs. Gathering the most
                complete by the labour market.
              </p>
              <form className="flex w-[588px] p-1 justify-between items-center rounded-lg border border-component-stroke-dark-soft bg-component-fill-light ">
                <div className="flex p-[10px] items-center gap-2">
                  <label for="email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_24611_2898)">
                        <path
                          d="M23.7078 22.2928L17.7388 16.3238C19.3654 14.3344 20.1651 11.7959 19.9726 9.23334C19.7801 6.67081 18.61 4.28031 16.7043 2.5563C14.7987 0.832293 12.3034 -0.0933258 9.7344 -0.029094C7.16545 0.0351379 4.71946 1.08431 2.90237 2.9014C1.08528 4.71849 0.0361144 7.16447 -0.0281174 9.73342C-0.0923492 12.3024 0.833269 14.7977 2.55728 16.7034C4.28129 18.609 6.67179 19.7791 9.23432 19.9716C11.7969 20.1642 14.3354 19.3644 16.3248 17.7378L22.2938 23.7068C22.4824 23.8889 22.735 23.9897 22.9972 23.9875C23.2594 23.9852 23.5102 23.88 23.6956 23.6946C23.881 23.5092 23.9862 23.2584 23.9884 22.9962C23.9907 22.734 23.8899 22.4814 23.7078 22.2928ZM10.0008 17.9998C8.41851 17.9998 6.87179 17.5306 5.5562 16.6515C4.2406 15.7725 3.21522 14.5231 2.60972 13.0613C2.00422 11.5994 1.84579 9.99091 2.15448 8.43906C2.46316 6.88721 3.22508 5.46175 4.3439 4.34293C5.46272 3.22411 6.88819 2.46218 8.44004 2.1535C9.99189 1.84482 11.6004 2.00324 13.0622 2.60875C14.524 3.21425 15.7735 4.23963 16.6525 5.55522C17.5316 6.87081 18.0008 8.41753 18.0008 9.99978C17.9984 12.1208 17.1548 14.1542 15.655 15.654C14.1552 17.1538 12.1218 17.9974 10.0008 17.9998Z"
                          fill="#525D73"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_24611_2898">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="text-component-text-gray  text-sm "
                    id="email"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex p-3 justify-center items-center gap-4 border rounded-lg bg-component-fill-primary">
                    <button className="text-component-text-light-fixed text-center text-sm">
                      Subscribe now
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex items-start gap-3">
                <p className="text-typography-caption-soft leading-6">
                  Popular search:
                </p>
                <p className="text-typography-caption-soft leading-6">Math</p>
                <p className="text-typography-caption-soft leading-6">
                  English
                </p>
                <p className="text-typography-caption-soft leading-6">ICT</p>
                <p className="text-typography-caption-soft leading-6">
                  Programming
                </p>
              </div>
            </div>
          </div>
          <div className="w-[588px] h-[433px] relative flex-shrink-0">
            <Image src={TeacherWritting} fill />
          </div>
        </div>
        <div className="flex items-start gap-6 py-[80px]">
          <div className="flex flex-col max-w-[588px] items-end gap-6 self-stretch">
            <div className="flex flex-col justify-center items-start gap-2 max-w-[588px] py-7 px-[21px] flex-grow-1 flex-shrink-0 basis-0 border rounded-2xl bg-container-fill-tertiary-soft">
              <h3 className="text-container-text-tertiary text-5xl leading-[64px]">
                152+
              </h3>
              <h4 className="text-typography-paragraph-soft text-2xl font-semibold leading-[34px]">
                Course
              </h4>
              <p className="text-typography-body-soft text-lg">
                Lorem ipsum dolor sit amet consectetur. Enim turpis orci
                pellentes
              </p>
            </div>
            <div className="flex max-w-[588px] gap-6 flex-grow-1 flex-shrink-0 basis-0">
              <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 self-stretch max-w-[282px] py-7 px-[21px] border rounded-2xl bg-container-fill-tertiary-soft ">
                <h3 className="text-container-text-tertiary text-5xl leading-[64px]">
                  4852+
                </h3>
                <h4 className="text-typography-paragraph-soft text-2xl font-semibold leading-[34px]">
                  Students
                </h4>
                <p className="text-typography-body-soft text-lg">
                  Lorem ipsum dolor sit amet consectetur. Enim
                </p>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 self-stretch max-w-[282px] py-7 px-[21px] border rounded-2xl bg-container-fill-tertiary-soft ">
                <h3 className="text-container-text-tertiary text-5xl leading-[64px]">
                  40+
                </h3>
                <h4 className="text-typography-paragraph-soft text-2xl font-semibold leading-[34px]">
                  Mentor
                </h4>
                <p className="text-typography-body-soft text-lg">
                  Lorem ipsum dolor sit amet consectetur. Enim turpis
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-8 max-w-[588px] py-[18px] px-[21px] border rounded-2xl bg-container-fill-tertiary-soft">
            <div className="flex flex-col items-start gap-3 self-stretch">
              <h3 className="text-container-text-tertiary text-5xl leading-[64px]">
                80+
              </h3>
              <h4 className="text-typography-paragraph-soft text-2xl font-semibold leading-[34px]">
                Certificate Program
              </h4>
              <p className="text-typography-body-soft text-lg">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.0859 32.4866V34.5833C27.0859 34.9148 26.9542 35.2327 26.7198 35.4672C26.4854 35.7016 26.1675 35.8333 25.8359 35.8333C25.5044 35.8333 25.1865 35.7016 24.9521 35.4672C24.7176 35.2327 24.5859 34.9148 24.5859 34.5833V32.4999H26.6693C26.8093 32.4999 26.9476 32.4949 27.0859 32.4866ZM24.5859 32.4999H13.3359C11.6783 32.4999 10.0886 31.8415 8.91652 30.6694C7.74442 29.4973 7.08594 27.9076 7.08594 26.2499V21.1133L16.6093 26.3749C17.6523 26.9361 18.8182 27.2299 20.0026 27.2299C21.187 27.2299 22.3529 26.9361 23.3959 26.3749L24.5859 25.7183V32.4999ZM27.0859 24.3366L32.9193 21.1133V26.2499C32.9194 27.8355 32.3169 29.3619 31.2338 30.5199C30.1507 31.6779 28.668 32.3809 27.0859 32.4866V24.3366Z"
                    fill="#6D49A4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5859 23.8132L22.5893 24.9166C21.7944 25.3448 20.9056 25.5691 20.0026 25.5691C19.0997 25.5691 18.2108 25.3448 17.4159 24.9166L3.55927 17.2599C2.61594 16.7382 2.08594 15.8249 2.08594 14.8699C2.08594 13.9132 2.61594 12.9999 3.55927 12.4799L17.4159 4.82155C18.2111 4.39413 19.0998 4.17041 20.0026 4.17041C20.9054 4.17041 21.7941 4.39413 22.5893 4.82155L36.4459 12.4799C37.3893 12.9999 37.9193 13.9132 37.9193 14.8699C37.9193 15.8249 37.3893 16.7382 36.4459 17.2599L27.0859 22.4316V21.2499C27.0861 21.0857 27.0537 20.9232 26.9908 20.7716C26.9279 20.62 26.8356 20.4824 26.7193 20.3666L20.8859 14.5332C20.7699 14.4172 20.6322 14.3252 20.4807 14.2624C20.3291 14.1996 20.1667 14.1673 20.0026 14.1673C19.8386 14.1673 19.6761 14.1996 19.5245 14.2624C19.373 14.3252 19.2353 14.4172 19.1193 14.5332C19.0033 14.6492 18.9113 14.7869 18.8485 14.9385C18.7857 15.0901 18.7534 15.2525 18.7534 15.4166C18.7534 15.5806 18.7857 15.743 18.8485 15.8946C18.9113 16.0462 19.0033 16.1839 19.1193 16.2999L24.5859 21.7682V23.8132Z"
                    fill="#6D49A4"
                  />
                </svg>
                <p className="text-container-text-tertiary text-center text-sm font-medium">
                  Complete course
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="2"
                viewBox="0 0 70 2"
                fill="none"
              >
                <path
                  d="M1 1H69"
                  stroke="#C1AFDD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="8 8"
                />
              </svg>
              <div className="flex flex-col items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M30.9234 6.3375H30.0359V5.4625C30.0359 3.5125 28.4609 1.9375 26.5234 1.9375H5.86094C3.91094 1.9375 2.33594 3.5125 2.33594 5.4625V29.125C2.33594 31.075 3.91094 32.65 5.86094 32.65H6.73594V33.525C6.73923 34.4589 7.11167 35.3536 7.77203 36.0139C8.43238 36.6743 9.32706 37.0467 10.2609 37.05H24.3222C22.8632 35.4495 22.0542 33.362 22.0534 31.1963C22.0558 28.8786 22.9774 26.6566 24.6162 25.0178C26.255 23.379 28.4771 22.4573 30.7947 22.455C32.0997 22.455 33.3347 22.75 34.4484 23.2663V9.8625C34.4451 8.92863 34.0727 8.03394 33.4123 7.37359C32.752 6.71323 31.8573 6.34079 30.9234 6.3375ZM8.98594 13.8962V13.275C8.98594 13.1075 9.05844 12.9362 9.16969 12.8188L13.1934 8.7825C13.3173 8.65814 13.4854 8.58801 13.6609 8.5875H14.2909V12.63C14.2909 13.3275 13.7222 13.8962 13.0247 13.8962H8.98594ZM20.4047 27.9688H14.3797C14.0813 27.9688 13.7952 27.8502 13.5842 27.6392C13.3732 27.4283 13.2547 27.1421 13.2547 26.8438C13.2547 26.5454 13.3732 26.2592 13.5842 26.0483C13.7952 25.8373 14.0813 25.7188 14.3797 25.7188H20.4047C20.7031 25.7188 20.9892 25.8373 21.2002 26.0483C21.4112 26.2592 21.5297 26.5454 21.5297 26.8438C21.5297 27.1421 21.4112 27.4283 21.2002 27.6392C20.9892 27.8502 20.7031 27.9688 20.4047 27.9688ZM24.9109 22.75H14.3859C14.0876 22.75 13.8014 22.6315 13.5904 22.4205C13.3795 22.2095 13.2609 21.9234 13.2609 21.625C13.2609 21.3266 13.3795 21.0405 13.5904 20.8295C13.8014 20.6185 14.0876 20.5 14.3859 20.5H24.9109C25.2093 20.5 25.4955 20.6185 25.7064 20.8295C25.9174 21.0405 26.0359 21.3266 26.0359 21.625C26.0359 21.9234 25.9174 22.2095 25.7064 22.4205C25.4955 22.6315 25.2093 22.75 24.9109 22.75ZM27.7922 6.3375H13.6609C12.8847 6.3375 12.1534 6.64125 11.6022 7.19375L7.56344 11.245C7.03409 11.7883 6.73727 12.5165 6.73594 13.275V30.3988H5.85469C5.15469 30.3988 4.58469 29.8288 4.58469 29.1287V5.4575C4.58469 4.77 5.16594 4.1875 5.85469 4.1875H26.5234C27.2234 4.1875 27.7922 4.7575 27.7922 5.4575V6.3375Z"
                    fill="#6D49A4"
                  />
                  <path
                    d="M30.7948 24.3302C29.8854 24.3179 28.9826 24.4865 28.1389 24.826C27.2952 25.1655 26.5273 25.6693 25.8799 26.308C25.2325 26.9468 24.7184 27.7078 24.3675 28.5469C24.0166 29.3859 23.8359 30.2864 23.8359 31.1958C23.8359 32.1053 24.0166 33.0057 24.3675 33.8448C24.7184 34.6839 25.2325 35.4449 25.8799 36.0837C26.5273 36.7224 27.2952 37.2262 28.1389 37.5657C28.9826 37.9052 29.8854 38.0737 30.7948 38.0615C32.5997 38.0371 34.3223 37.3031 35.59 36.0181C36.8577 34.7332 37.5684 33.0008 37.5684 31.1958C37.5684 29.3908 36.8577 27.6584 35.59 26.3735C34.3223 25.0886 32.5997 24.3546 30.7948 24.3302ZM33.8348 30.9027L30.4823 33.604C30.3665 33.6977 30.2332 33.7674 30.0901 33.8091C29.947 33.8507 29.7971 33.8634 29.649 33.8464C29.501 33.8294 29.3578 33.7831 29.2279 33.7101C29.098 33.6371 28.9839 33.539 28.8923 33.4215L27.5748 31.7415C27.3907 31.5066 27.3074 31.2082 27.3432 30.9119C27.3791 30.6155 27.5312 30.3456 27.7661 30.1615C28.001 29.9773 28.2994 29.894 28.5957 29.9299C28.892 29.9657 29.1619 30.1178 29.3461 30.3527L29.9598 31.1352L32.4248 29.1502C32.5394 29.0532 32.6722 28.9802 32.8154 28.9353C32.9587 28.8905 33.1094 28.8747 33.2589 28.889C33.4083 28.9033 33.5533 28.9474 33.6854 29.0186C33.8176 29.0898 33.9341 29.1867 34.0282 29.3037C34.1223 29.4206 34.192 29.5552 34.2333 29.6995C34.2746 29.8438 34.2866 29.9949 34.2685 30.1439C34.2505 30.293 34.2029 30.4369 34.1284 30.5672C34.0539 30.6975 33.9541 30.8116 33.8348 30.9027Z"
                    fill="#6D49A4"
                  />
                </svg>
                <p className="text-container-text-tertiary text-center text-sm font-medium">
                  Submit assignment
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="2"
                viewBox="0 0 70 2"
                fill="none"
              >
                <path
                  d="M1 1H69"
                  stroke="#C1AFDD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="8 8"
                />
              </svg>
              <div className="flex flex-col items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M16.8766 17.2002L17.9641 20.0002H15.7891L16.8766 17.2002Z"
                    fill="#6D49A4"
                  />
                  <path
                    d="M30 2.5H10C9.00544 2.5 8.05161 2.89509 7.34835 3.59835C6.64509 4.30161 6.25 5.25544 6.25 6.25V33.75C6.25 34.7446 6.64509 35.6984 7.34835 36.4016C8.05161 37.1049 9.00544 37.5 10 37.5H23.75V31.25C23.75 30.2554 24.1451 29.3016 24.8483 28.5983C25.5516 27.8951 26.5054 27.5 27.5 27.5H33.75V6.25C33.75 5.25544 33.3549 4.30161 32.6517 3.59835C31.9484 2.89509 30.9946 2.5 30 2.5ZM21.7 26.1625C21.5574 26.2216 21.4044 26.2513 21.25 26.25C20.9982 26.2493 20.7525 26.1725 20.5451 26.0297C20.3376 25.887 20.1781 25.6849 20.0875 25.45L18.9375 22.5H14.8125L13.6625 25.45C13.6125 25.6145 13.5291 25.767 13.4174 25.8978C13.3058 26.0286 13.1684 26.135 13.0138 26.2103C12.8592 26.2856 12.6907 26.3281 12.5189 26.3354C12.3471 26.3426 12.1757 26.3142 12.0153 26.2522C11.8549 26.1901 11.7091 26.0956 11.5869 25.9746C11.4647 25.8536 11.3688 25.7086 11.3052 25.5489C11.2416 25.3891 11.2116 25.2179 11.2172 25.0461C11.2227 24.8742 11.2637 24.7053 11.3375 24.55L15.7125 13.3C15.8046 13.0668 15.9648 12.8668 16.1721 12.7258C16.3794 12.5848 16.6243 12.5094 16.875 12.5094C17.1257 12.5094 17.3706 12.5848 17.5779 12.7258C17.7852 12.8668 17.9454 13.0668 18.0375 13.3L20.9375 20.8L22.4125 24.55C22.5309 24.8584 22.5224 25.2011 22.3889 25.5032C22.2554 25.8054 22.0077 26.0424 21.7 26.1625ZM27.5 15H26.25V16.25C26.25 16.5815 26.1183 16.8995 25.8839 17.1339C25.6495 17.3683 25.3315 17.5 25 17.5C24.6685 17.5 24.3505 17.3683 24.1161 17.1339C23.8817 16.8995 23.75 16.5815 23.75 16.25V15H22.5C22.1685 15 21.8505 14.8683 21.6161 14.6339C21.3817 14.3995 21.25 14.0815 21.25 13.75C21.25 13.4185 21.3817 13.1005 21.6161 12.8661C21.8505 12.6317 22.1685 12.5 22.5 12.5H23.75V11.25C23.75 10.9185 23.8817 10.6005 24.1161 10.3661C24.3505 10.1317 24.6685 10 25 10C25.3315 10 25.6495 10.1317 25.8839 10.3661C26.1183 10.6005 26.25 10.9185 26.25 11.25V12.5H27.5C27.8315 12.5 28.1495 12.6317 28.3839 12.8661C28.6183 13.1005 28.75 13.4185 28.75 13.75C28.75 14.0815 28.6183 14.3995 28.3839 14.6339C28.1495 14.8683 27.8315 15 27.5 15ZM26.25 31.25V36.775L33.025 30H27.5C27.1685 30 26.8505 30.1317 26.6161 30.3661C26.3817 30.6005 26.25 30.9185 26.25 31.25Z"
                    fill="#6D49A4"
                  />
                </svg>
                <p className="text-container-text-tertiary text-center text-sm font-medium">
                  Attend exam
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="2"
                viewBox="0 0 70 2"
                fill="none"
              >
                <path
                  d="M1 1H69"
                  stroke="#C1AFDD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="8 8"
                />
              </svg>
              <div className="flex flex-col items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M30.2666 2.5H9.73656C8.59016 2.5 7.49072 2.95541 6.68009 3.76603C5.86947 4.57666 5.41406 5.6761 5.41406 6.8225V29.635C5.41406 30.7814 5.86947 31.8808 6.68009 32.6915C7.49072 33.5021 8.59016 33.9575 9.73656 33.9575H18.5628V31.425C17.4098 30.1819 16.7687 28.5492 16.7678 26.8537C16.7678 23.1275 19.8003 20.095 23.5266 20.095C27.2528 20.095 30.2841 23.1262 30.2841 26.8537C30.2837 28.5506 29.6416 30.1845 28.4866 31.4275V33.9575H30.2641C31.4105 33.9575 32.5099 33.5021 33.3205 32.6915C34.1312 31.8808 34.5866 30.7814 34.5866 29.635V6.8225C34.5871 6.25493 34.4757 5.69283 34.2588 5.16835C34.0419 4.64386 33.7237 4.16726 33.3225 3.76582C32.9213 3.36437 32.4449 3.04594 31.9205 2.82874C31.3962 2.61155 30.8341 2.49984 30.2666 2.5ZM17.2828 16.6837H12.0891C11.7907 16.6837 11.5045 16.5652 11.2936 16.3542C11.0826 16.1433 10.9641 15.8571 10.9641 15.5587C10.9641 15.2604 11.0826 14.9742 11.2936 14.7633C11.5045 14.5523 11.7907 14.4337 12.0891 14.4337H17.2828C17.5812 14.4337 17.8673 14.5523 18.0783 14.7633C18.2893 14.9742 18.4078 15.2604 18.4078 15.5587C18.4078 15.8571 18.2893 16.1433 18.0783 16.3542C17.8673 16.5652 17.5812 16.6837 17.2828 16.6837ZM23.6428 10.5675H12.0891C11.7907 10.5675 11.5045 10.449 11.2936 10.238C11.0826 10.027 10.9641 9.74087 10.9641 9.4425C10.9641 9.14413 11.0826 8.85798 11.2936 8.647C11.5045 8.43603 11.7907 8.3175 12.0891 8.3175H23.6428C23.9412 8.3175 24.2273 8.43603 24.4383 8.647C24.6493 8.85798 24.7678 9.14413 24.7678 9.4425C24.7678 9.74087 24.6493 10.027 24.4383 10.238C24.2273 10.449 23.9412 10.5675 23.6428 10.5675Z"
                    fill="#6D49A4"
                  />
                  <path
                    d="M23.5262 33.6136C22.4125 33.6136 21.3637 33.3386 20.4375 32.8599V37.4999L23.525 35.2874L26.6125 37.4999V32.8599C25.6591 33.3549 24.6006 33.6134 23.5262 33.6136Z"
                    fill="#6D49A4"
                  />
                  <path
                    d="M23.5283 31.7387C26.2255 31.7387 28.412 29.5522 28.412 26.8549C28.412 24.1577 26.2255 21.9712 23.5283 21.9712C20.8311 21.9712 18.6445 24.1577 18.6445 26.8549C18.6445 29.5522 20.8311 31.7387 23.5283 31.7387Z"
                    fill="#6D49A4"
                  />
                </svg>
                <p className="text-container-text-tertiary text-center text-sm font-medium">
                  Get certificate
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <button className="flex py-3 px-6 justify-center items-center gap-4 borde rounded-lg bg-component-fill-tertiary">
                <span className="text-component-text-light-fixed text-center leading-6">
                  Book a visit today
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-[80px] bg-container-fill-dark-soft">
          
        </div>
        <div className="flex py-[80px] items-start gap-6 bg-background-fill-white">
          <div className="w-[587px] h-[365px] relative ">
            <Image src={AdmissionBook} fill />
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <h1 className="w-[486px] text-typography-display text-5xl font-medium leading-[64px]">
                Admission & Aid
              </h1>
              <p className="w-[588px] text-typography-body-soft leading-6">
                Welcome to our university is website! Use the search bar below
                to explore our diverse range of programs. Gathering the most
                complete by the labour market.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex items-start">
                <button className="flex items-center gap-2">
                  <span className="text-component-text-primary text-center text-lg font-medium">
                    Process overview
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23.768 11.4477L19.35 7.08665C18.852 6.59465 18 6.94365 18 7.63865V10.9997H1C0.447 10.9997 0 11.4477 0 11.9997C0 12.5517 0.447 12.9997 1 12.9997H18V16.3607C18 17.0557 18.852 17.4047 19.35 16.9127L23.768 12.5517C24.077 12.2467 24.077 11.7527 23.768 11.4477Z"
                      fill="#D33C85"
                    />
                  </svg>
                </button>
              </div>
              <hr className="w-[588px] h-[2px] bg-background-stroke-surface" />
              <div className="flex items-start">
                <button className="flex items-center gap-2">
                  <span className="text-component-text-primary text-center text-lg font-medium">
                    Fees and financial information
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23.768 11.4477L19.35 7.08665C18.852 6.59465 18 6.94365 18 7.63865V10.9997H1C0.447 10.9997 0 11.4477 0 11.9997C0 12.5517 0.447 12.9997 1 12.9997H18V16.3607C18 17.0557 18.852 17.4047 19.35 16.9127L23.768 12.5517C24.077 12.2467 24.077 11.7527 23.768 11.4477Z"
                      fill="#D33C85"
                    />
                  </svg>
                </button>
              </div>
              <hr className="w-[588px] h-[2px] bg-background-stroke-surface" />
              <div className="flex items-start">
                <button className="flex items-center gap-2">
                  <span className="text-component-text-primary text-center text-lg font-medium">
                    How to apply
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23.768 11.4477L19.35 7.08665C18.852 6.59465 18 6.94365 18 7.63865V10.9997H1C0.447 10.9997 0 11.4477 0 11.9997C0 12.5517 0.447 12.9997 1 12.9997H18V16.3607C18 17.0557 18.852 17.4047 19.35 16.9127L23.768 12.5517C24.077 12.2467 24.077 11.7527 23.768 11.4477Z"
                      fill="#D33C85"
                    />
                  </svg>
                </button>
              </div>
              <hr className="w-[588px] h-[2px] bg-background-stroke-surface" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
