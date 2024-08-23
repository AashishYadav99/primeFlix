import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className ="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
        <div className="flex justify-center items-center  gap-4">
          <Link to="/">About</Link>
          <Link to="/"> Contact</Link>
        </div>
        <p className="text-sm">Created by @Ashish Yadav</p>
      </div>
    </>
  );
}

export default Footer;
