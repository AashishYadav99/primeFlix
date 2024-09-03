import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className ="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
        <div className="flex justify-center items-center  gap-4">
          <Link to="/"><h1 className="text-2xl font-bold">About</h1></Link>
          <Link to="https://www.linkedin.com/in/ashish-yadav-86874b271/"> <h1 className="font-bold text-2xl hover:text-green-500">Contact</h1></Link>
        </div>
        <p className="text-sm">Created by @ Ashish K. Yadav</p>
      </div>
    </>
  );
}

export default Footer;
