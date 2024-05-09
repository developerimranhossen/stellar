import Image from "next/image";
import CourseImg from "@/public/course-card.svg";
import Avatar from "@/public/Avatar.svg";

function CourseCard() {
  return (
    <div className="w-[384px] h-[475px] px-3 pt-3 pb-6 flex flex-col gap-4 rounded-[16px] bg-container-fill-light border shadow-background-sm ">
      <Image src={CourseImg} />
      <div className="flex flex-col items-start gap-8 h-[214px]">
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex p-2 justify-center items-center gap-[10px] border border-component-stroke-secondary-soft rounded-[99px] bg-component-fill-secondary-soft ">
              <p className="text-container-text-secondary text-center text-sm">
                class 4
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-container-text-warning text-center text-xs font-semibold leading-[18px]">
                4.2
              </p>
              <div className="flex items-start gap-p[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.68724 2.1811C7.2237 1.05096 8.7737 1.05096 9.31016 2.1811L10.2373 4.13428C10.4503 4.58306 10.8621 4.89412 11.3384 4.96609L13.4116 5.27929C14.6111 5.46052 15.0901 6.99319 14.2221 7.87288L12.722 9.39322C12.3773 9.74255 12.22 10.2459 12.3014 10.7391L12.6555 12.8859C12.8604 14.128 11.6064 15.0753 10.5335 14.4888L8.67925 13.4752C8.25319 13.2423 7.7442 13.2423 7.31815 13.4752L5.46387 14.4888C4.39096 15.0753 3.13698 14.128 3.34189 12.8859L3.69602 10.7391C3.77739 10.2459 3.62011 9.74255 3.27542 9.39322L1.77528 7.87289C0.907275 6.99319 1.38625 5.46052 2.5858 5.27929L4.65895 4.96609C5.13529 4.89412 5.54708 4.58306 5.7601 4.13428L6.68724 2.1811Z"
                    fill="#FFC14A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.68724 2.1811C7.2237 1.05096 8.7737 1.05096 9.31016 2.1811L10.2373 4.13428C10.4503 4.58306 10.8621 4.89412 11.3384 4.96609L13.4116 5.27929C14.6111 5.46052 15.0901 6.99319 14.2221 7.87288L12.722 9.39322C12.3773 9.74255 12.22 10.2459 12.3014 10.7391L12.6555 12.8859C12.8604 14.128 11.6064 15.0753 10.5335 14.4888L8.67925 13.4752C8.25319 13.2423 7.7442 13.2423 7.31815 13.4752L5.46387 14.4888C4.39096 15.0753 3.13698 14.128 3.34189 12.8859L3.69602 10.7391C3.77739 10.2459 3.62011 9.74255 3.27542 9.39322L1.77528 7.87289C0.907275 6.99319 1.38625 5.46052 2.5858 5.27929L4.65895 4.96609C5.13529 4.89412 5.54708 4.58306 5.7601 4.13428L6.68724 2.1811Z"
                    fill="#FFC14A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.68724 2.1811C7.2237 1.05096 8.7737 1.05096 9.31016 2.1811L10.2373 4.13428C10.4503 4.58306 10.8621 4.89412 11.3384 4.96609L13.4116 5.27929C14.6111 5.46052 15.0901 6.99319 14.2221 7.87288L12.722 9.39322C12.3773 9.74255 12.22 10.2459 12.3014 10.7391L12.6555 12.8859C12.8604 14.128 11.6064 15.0753 10.5335 14.4888L8.67925 13.4752C8.25319 13.2423 7.7442 13.2423 7.31815 13.4752L5.46387 14.4888C4.39096 15.0753 3.13698 14.128 3.34189 12.8859L3.69602 10.7391C3.77739 10.2459 3.62011 9.74255 3.27542 9.39322L1.77528 7.87289C0.907275 6.99319 1.38625 5.46052 2.5858 5.27929L4.65895 4.96609C5.13529 4.89412 5.54708 4.58306 5.7601 4.13428L6.68724 2.1811Z"
                    fill="#FFC14A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M5.68724 1.1811C6.2237 0.0509615 7.7737 0.0509594 8.31016 1.1811L9.23729 3.13428C9.45032 3.58306 9.8621 3.89412 10.3384 3.96609L12.4116 4.27929C13.6111 4.46052 14.0901 5.99319 13.2221 6.87288L11.722 8.39322C11.3773 8.74255 11.22 9.24585 11.3014 9.73911L11.6555 11.8859C11.8604 13.128 10.6064 14.0753 9.53352 13.4888L7.67925 12.4752C7.25319 12.2423 6.7442 12.2423 6.31815 12.4752L4.46387 13.4888C3.39096 14.0753 2.13698 13.128 2.34189 11.8859L2.69602 9.73911C2.77739 9.24585 2.62011 8.74255 2.27542 8.39322L0.775281 6.87289C-0.0927247 5.99319 0.38625 4.46052 1.58581 4.27929L3.65895 3.96609C4.13529 3.89412 4.54708 3.58306 4.7601 3.13428L5.68724 1.1811Z"
                    fill="#FFC14A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M5.68724 1.1811C6.2237 0.0509615 7.7737 0.0509594 8.31016 1.1811L9.23729 3.13428C9.45032 3.58306 9.8621 3.89412 10.3384 3.96609L12.4116 4.27929C13.6111 4.46052 14.0901 5.99319 13.2221 6.87288L11.722 8.39322C11.3773 8.74255 11.22 9.24585 11.3014 9.73911L11.6555 11.8859C11.8604 13.128 10.6064 14.0753 9.53352 13.4888L7.67925 12.4752C7.25319 12.2423 6.7442 12.2423 6.31815 12.4752L4.46387 13.4888C3.39096 14.0753 2.13698 13.128 2.34189 11.8859L2.69602 9.73911C2.77739 9.24585 2.62011 8.74255 2.27542 8.39322L0.775281 6.87289C-0.0927247 5.99319 0.38625 4.46052 1.58581 4.27929L3.65895 3.96609C4.13529 3.89412 4.54708 3.58306 4.7601 3.13428L5.68724 1.1811Z"
                    fill="#FFC14A"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-typography-heading text-2xl font-semibold leading-[34px]">
              Mathematics 1
            </h1>
            <p className="text-typography-body-soft leading-6">
              Collaboration can make our teams stronger, and our individual
              designs better.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <Image src={Avatar} />
            <div className="flex flex-col items-start">
              <h3 className="text-typography-sub-heading font-semibold leading-6">
                Olivia Rhye
              </h3>
              <p className="text-gray-500 leading-6">M.S.C in Computer</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="flex w-6 h-6 pt-[3.654px] px-[2.328px] pb-[4.108px] justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                >
                  <path
                    d="M14.439 8.82833V7.78468L15.649 8.32884C16.179 8.56719 16.7865 8.56321 17.3134 8.31796L18.5586 7.73828V8.82833C18.5586 9.96592 17.6364 10.8881 16.4988 10.8881C15.3612 10.8881 14.439 9.96593 14.439 8.82833Z"
                    stroke="#525D73"
                    stroke-linecap="round"
                  />
                  <path
                    d="M20.5214 6.41092L17.1 4.89027C16.707 4.71561 16.2584 4.71561 15.8655 4.89027L12.444 6.41092C12.2434 6.50006 12.2434 6.78472 12.444 6.87387L15.8655 8.39451C16.2584 8.56917 16.707 8.56917 17.1 8.39451L20.5214 6.87387C20.722 6.78472 20.722 6.50006 20.5214 6.41092Z"
                    stroke="#525D73"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.4704 12.4526C14.5734 12.4163 14.6791 12.3827 14.7872 12.352C14.9625 12.3021 15.1501 12.3557 15.2786 12.4814L16.1104 13.2952C16.3154 13.4957 16.6501 13.4957 16.8551 13.2952L17.6869 12.4814C17.8154 12.3557 18.003 12.3021 18.1783 12.352C19.6472 12.7699 20.6719 13.7142 20.6719 14.8121C20.6719 15.3716 20.203 15.8253 19.6246 15.8253H15.6627"
                    stroke="#525D73"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="12.3945"
                    y1="7.14258"
                    x2="12.3945"
                    y2="9.30892"
                    stroke="#525D73"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.49679 6.83874V5.20265L6.76872 6.04934C7.2192 6.21723 7.71509 6.21723 8.16557 6.04934L10.4375 5.20265V6.83874C10.4375 8.47922 9.10763 9.80909 7.46715 9.80909C5.82666 9.80909 4.49679 8.47922 4.49679 6.83874Z"
                    stroke="#525D73"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.3889 3.07475L8.37377 0.845816C7.79775 0.589806 7.14023 0.589806 6.56421 0.845816L1.5491 3.07475C1.2551 3.20542 1.2551 3.62267 1.5491 3.75334L6.56421 5.98228C7.14023 6.23829 7.79775 6.23829 8.37377 5.98228L13.3889 3.75334C13.6829 3.62267 13.6829 3.20542 13.3889 3.07475Z"
                    stroke="#525D73"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.70397 11.9912L6.92324 13.184C7.22366 13.4779 7.71432 13.4779 8.01474 13.184L9.23401 11.9912C9.42236 11.807 9.69733 11.7284 9.95431 11.8015C12.1074 12.4141 13.6094 13.7982 13.6094 15.4074C13.6094 16.2277 12.9221 16.8926 12.0743 16.8926H2.8637C2.01589 16.8926 1.3286 16.2277 1.3286 15.4074C1.3286 13.7982 2.83059 12.4141 4.98366 11.8015C5.24065 11.7284 5.51562 11.807 5.70397 11.9912Z"
                    stroke="#525D73"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="1.94922"
                    y1="4.03125"
                    x2="1.94922"
                    y2="7.55508"
                    stroke="#525D73"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <p className="text-typography-caption-soft leading-6">
                132 Students
              </p>
            </div>
            <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" fill="none"/>
  <path d="M12.5 11V11.5H13H15C15.1326 11.5 15.2598 11.5527 15.3536 11.6464C15.4473 11.7402 15.5 11.8674 15.5 12C15.5 12.1326 15.4473 12.2598 15.3536 12.3536C15.2598 12.4473 15.1326 12.5 15 12.5H12C11.8674 12.5 11.7402 12.4473 11.6465 12.3536C11.5527 12.2598 11.5 12.1326 11.5 12V7C11.5 6.86739 11.5527 6.74022 11.6465 6.64645C11.7402 6.55268 11.8674 6.5 12 6.5C12.1326 6.5 12.2598 6.55268 12.3536 6.64645C12.4473 6.74022 12.5 6.86739 12.5 7V11ZM6.72209 4.10104C8.28435 3.05717 10.1211 2.5 12 2.5C13.2476 2.5 14.4829 2.74572 15.6355 3.22314C16.7881 3.70056 17.8354 4.40033 18.7175 5.28249C19.5997 6.16464 20.2994 7.21191 20.7769 8.36451C21.2543 9.5171 21.5 10.7524 21.5 12C21.5 13.8789 20.9428 15.7157 19.899 17.2779C18.8551 18.8402 17.3714 20.0578 15.6355 20.7769C13.8996 21.4959 11.9895 21.684 10.1466 21.3175C8.30383 20.9509 6.61109 20.0461 5.28249 18.7175C3.95389 17.3889 3.0491 15.6962 2.68254 13.8534C2.31598 12.0105 2.50412 10.1004 3.22315 8.36451C3.94218 6.62861 5.15982 5.14491 6.72209 4.10104ZM7.27766 19.0675C8.67548 20.0015 10.3189 20.5 12 20.5C14.2543 20.5 16.4164 19.6045 18.0104 18.0104C19.6045 16.4163 20.5 14.2543 20.5 12C20.5 10.3189 20.0015 8.67547 19.0675 7.27765C18.1335 5.87984 16.806 4.79037 15.2528 4.14702C13.6996 3.50368 11.9906 3.33535 10.3417 3.66333C8.6929 3.9913 7.17834 4.80085 5.9896 5.98959C4.80085 7.17834 3.9913 8.69289 3.66333 10.3417C3.33536 11.9906 3.50368 13.6996 4.14703 15.2528C4.79037 16.806 5.87984 18.1335 7.27766 19.0675Z" fill="black" stroke="#525D73"/>
</svg>

              <p className="text-typography-caption-soft leading-6">3 month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;