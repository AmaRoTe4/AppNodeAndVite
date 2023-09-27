import { Link } from "react-router-dom"

function Page404() {
  return (
    <div className="w-screen py-36 px-4 flex flex-col gap-10 justify-center items-center">
      <h1 className="font-bold text-[36px] md:text-[72px]">404 not fund</h1>
      <Link to="/" className="px-3 py-2 border border-black w-[200px] text-center text-[16px] md:text-[24px] rounded-sm bg-blue-300">Main</Link>
    </div>
  );
}

export default Page404;
