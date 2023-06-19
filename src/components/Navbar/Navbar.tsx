import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link href="/">
        <Image src={logo} alt="logo" width={300} height={72} />
      </Link>
      <div className="nav-menu">
        <Link href="/login" className="nav-link white">
          <p>Login</p>
        </Link>
        <Link href="/pricing" className="nav-link black">
          <p>Pricing</p>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
