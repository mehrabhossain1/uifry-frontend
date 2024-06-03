import Image from "next/image";
import Button from "../Button/Button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="max-w-[1090px] h-[60px] mt-[40px] mx-auto flex justify-between items-center">
      <div className="w-[535px] h-[34px] flex items-center">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex ml-[40px] gap-[24px] text-[20px] font-[500]">
          <p>Home</p>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Features</p>
        </div>
      </div>

      {/* Reusable button */}
      <div>
        <Button>Download</Button>
      </div>
    </nav>
  );
};

export default Navbar;
