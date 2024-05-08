import Image from "next/image"
import CardImage from "@/public/blog-card.svg"


function BlogCard() {
  return (
    <div className="w-[588px] h-[555px] flex flex-col items-start rounded-[24px] p-6 border border-background-stroke-outermost gap-6">
        <Image src={CardImage} />
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-container-text-secondary font-mediuml leading-6">Olivia Rhye • 1 Jan 2023</p>
            <h2 className="text-typography-heading text-2xl font-semibold leading-[34px]">UX review presentations</h2>
            <p className="text-typography-body-soft leading-6">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          </div>
          <div className="flex items-start gap-2">
          <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">Branding</p>
          <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">Presentation</p>
          <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">Marketing</p>
          </div>
        </div>
    </div>
  )
}

export default BlogCard