import {  useNavigate } from "react-router-dom";
import '../css/custom.css'

const Page404 = () => {
  const navigate = useNavigate();
 
  const backHome = () =>{
      navigate(-1);
 }

  return (
    <div className="shado404">
      <main className="grid max-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold text-[#D0AE50]">404</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
    
      <a onClick={backHome} href="#" className="rounded-md bg-[#D0AE50] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C5A245] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
    </div>
  </div>
</main>
 </div>
  )
}

export default Page404;
