import Image from "next/image";
import CourseImg from "@/public/course-card.svg";
import StarImg from "@/public/star.svg";
import WhiteStar from "@/public/white-star.svg";
import Avatar from "@/public/Avatar.svg";
import Students from "@/public/students.svg";
import Clock from "@/public/Clock.svg";

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
                <Image src={StarImg} />
                <Image src={StarImg} />
                <Image src={StarImg} />
                <Image src={WhiteStar} />
                <Image src={WhiteStar} />
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
                <Image src={Students} />
              </div>
              <p className="text-typography-caption-soft leading-6">
                  132 Students
              </p>

            </div>
            <div className="flex items-center gap-2">
                <Image src={Clock} />
              
              <p className="text-typography-caption-soft leading-6">
              3 month
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
