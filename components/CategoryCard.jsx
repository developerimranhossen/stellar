import Image from "next/image"
import CategoryImg from "@/public/category.svg"

function CategoryCard() {
  return (
    <div className="flex w-[384px] p-4 flex-col items-center gap-2 border border-background-fill-surface bg-background-fill-surface rounded-xl ">
        <div className="flex flex-col gap-2 ">
            <Image src={CategoryImg} />
            <h3 className="text-typography-sub-heading text-[18px] font-semibold leading-7">Online Certificate </h3>
            <p className="text-typography-paragraph-soft text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
    </div>
  )
}

export default CategoryCard