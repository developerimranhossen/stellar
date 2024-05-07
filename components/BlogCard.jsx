import Image from "next/image"
import CardImage from "@/public/blog-card.png"


function BlogCard() {
  return (
    <div className="w-[588px] h-[555px] flex flex-col items-start rounded-[24px] p-6 border border-[#F0F1F3]">
        <Image src={CardImage} />
        <div className="">
        </div>
    </div>
  )
}

export default BlogCard