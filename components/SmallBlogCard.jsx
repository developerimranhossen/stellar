import Image from "next/image";
import SmallBlogImg from "@/public/course-card.svg";

function SmallBlogCard() {
  return (
    <div className="flex flex-col justify-between items-start">
      <div className="flex flex-col w-[588px] justify-center items-start gap-8">
        <div className="flex items-start gap-6">
          <Image src={SmallBlogImg} />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start gap-1">
              <p className="text-container-text-secondary font-mediuml leading-6">
                Olivia Rhye • 1 Jan 2023
              </p>
              <h2 className="text-typography-heading  font-semibold leading-6">
              Grid system for better Design User Interface
              </h2>
              <p className="text-typography-body-soft leading-6">
              Linear helps streamline software projects, sprints, tasks, ...
              </p>
            </div>
            <div className="flex justify-center items-center px-2 py-[2px] gap-[10px]">
              <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">
                Branding
              </p>
              <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">
                Presentation
              </p>
              <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">
                Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBlogCard;
