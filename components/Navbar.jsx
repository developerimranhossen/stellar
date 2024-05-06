import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="max-w-[1440px] flex justify-between items-center px-[120px] py-6 mx-auto">
        <Link href="/" className="text-base font-medium">
          {/* after logo here for now text */}
          Stailer school
        </Link>
        <ul className="flex justify-center items-center gap-8 leading-6">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Admission</Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#">Blogs</Link>
          </li>
          <li>
            <Link href="#">Elements</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6 leading-6">
          <Link href="sign-in" className="text-[#D33C85] font-medium">Sign in</Link>
          <Link href="sign-up" className="py-3 px-6 rounded-[8px] text-white bg-[#D33C85]">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
