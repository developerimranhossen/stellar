import Image from "next/image";
import FacebookICon from "@/public/icons/facebook.png";
import PinterestICon from "@/public/icons/pinterest.png";
import InstagramICon from "@/public/icons/instagram.png";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-[120px] py-[80px] bg-[#151A2D]">
      <div className="text-white flex justify-between items-start ">
        <div className="flex flex-col gap-3 w-[282px]">
          <h1 className="text-2xl font-medium">nODEStHEME</h1>
          <p className="font-[14px] text-[#8791B7] leading-5">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="flex gap-4 mt-3">
            <Image src={FacebookICon} alt="fb-icon" />
            <Image src={PinterestICon} alt="fb-icon" />
            <Image src={InstagramICon} alt="fb-icon" />
          </div>
        </div>
        <div className="flex justify-between w-[792px]">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium leading-6">Product</h3>
            <div className="flex flex-col gap-3 items-start text-[#8791B7]">
              <h4>Webflow</h4>
              <h4>Wordpress</h4>
              <h4>Wix</h4>
              <h4>React</h4>
              <h4>LMS</h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium leading-6">Product</h3>
            <div className="flex flex-col gap-3 items-start text-[#8791B7]">
              <h4>Webflow</h4>
              <h4>Wordpress</h4>
              <h4>Wix</h4>
              <h4>React</h4>
              <h4>LMS</h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium leading-6">Product</h3>
            <div className="flex flex-col gap-3 items-start text-[#8791B7]">
              <h4>Webflow</h4>
              <h4>Wordpress</h4>
              <h4>Wix</h4>
              <h4>React</h4>
              <h4>LMS</h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium leading-6">Product</h3>
            <div className="flex flex-col gap-3 items-start text-[#8791B7]">
              <h4>Webflow</h4>
              <h4>Wordpress</h4>
              <h4>Wix</h4>
              <h4>React</h4>
              <h4>LMS</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
