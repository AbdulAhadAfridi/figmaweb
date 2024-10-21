
import Wrapper from "@/app/component/Wrapper"
import plant from "@/app/public/plant/plant.png"
// import plant1 from "@/app/public/plant/photo1.png"
import frame1 from "@/app/public/plant/frame1.png"
import frame2 from "@/app/public/plant/frame2.png"
import frame3 from "@/app/public/plant/frame3.png"
import frame6 from "@/app/public/plant/frame6.png"
import frame7 from "@/app/public/plant/frame7.png"
import Image from "next/image";



export default function Homepage() {
  return (
    
    <>

      <Wrapper>
      <section className=" mt-8 px-4 ">
        <Image
        src={plant} alt="pic plant"
        width={1248}
        height={512}
         />
  
  <div className=" mt-10">
  {/* <!-- Left section: Title, Description, and Button --> */}
  <div className="flex">
    <div className="w-1/3 ml-2">
      <h3 className="font-extrabold text-xl mb-0">Best Selling </h3>
      <h3 className="font-extrabold text-xl mb-2 ">Plants</h3>
      <p className="text-gray-500 mb-4">Easiest way to a healthy life by buying your favorite plants.</p>
      <button className="bg-teal-200 text-teal-800 py-2 px-4 rounded-md">See more </button>
    </div>
    
    {/* <!-- Right section: Plant Images --> */}
    <div className="flex w-2/3 justify-between ml-6 space-x-7">
      {/* <!-- Plant 1 --> */}
      <div className="text-center">
        <Image src={frame1} alt="Natural Plants" className="rounded-lg mb-4" width="150"  />
        <p className="font-semibold ">Artificial Plants</p>
        <p className="text-gray-500">P 1,490.00</p>
      </div>
      {/* <!-- Plant 2 --> */}
      <div className="text-center ">
        <Image src={frame2} alt="Artificial Plants" className="rounded-lg mb-4" width="150" />
        
      </div>
      {/* <!-- Plant 3 --> */}
      <div className="text-center">
        <Image src={frame3} alt="Artificial Plants" className="rounded-lg mb-4" width="150" />
        <p className="font-semibold ">Artificial Plants</p>
        <p className="text-gray-500">P 1,900.00</p>
      </div>
    </div>
  </div>
</div>
<section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 ml-2">About Us</h2>
            <p className="text-gray-600 mb-8  text-sm ml-2">Order now and appreciate the beauty of nature</p>
            <div className="flex justify-around space-x-8">
                {/* <!-- Feature 1 --> */}
                <div className="text-center">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">Large Assortment</h3>
                    <p className="text-gray-600 text-xs">We offer many different types of products with fewer variations in each category.</p>
                </div>

                {/* <!-- Feature 2 --> */}
                <div className="text-center">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M4 16h16M4 12h16m-8 0H4m0 0h8m-4-4v4m0-4v4m0-4V4h16v12M4 8v4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">Fast & Free Shipping</h3>
                    <p className="text-gray-600 text-xs">4-day or less delivery time, free shipping, and an expedited delivery option.</p>
                </div>

                {/* <!-- Feature 3 --> */}
                <div className="text-center">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-4.03C18.403 11.674 17.745 11 17 11h-1l-1.25 1.25L12 13l-2.25-2.25H9c-.745 0-1.403.674-1.595 1.97L6 17h5m-1 4h2m1-4H9l-.5 1.5a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5L5 15m10 0v-4m0 4v-4m0 0v4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">24/7 Support</h3>
                    <p className="text-gray-600 text-xs">Answers to any business-related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </section>
    


<div className="text-center mt-8">
          <h4 className="font-extrabold text-2xl mt-4">Categories</h4>
          <p className="text-sm text-gray-600">Find what you are you are looking for</p>
         </div>
         <div className="flex ml-0 space-x-14 mt-8 py-8 mr-0 bg-blue-200 w-[1440] h-[841]">
          <Image 
          className="px-7 "
          src={frame1} alt="pic plant" width={200} height={100}/>
          <Image src={frame2} alt="pic plant frame2" width={150} height={100}/>
           <Image
           className="px-0 "
           src={frame3} alt=" pic plant 2"width={150} height={100}/>

         </div>
        
         
      

      <div className="font-extrabold px-7 mt-8 text-sm ">
        <h3>What customers say about </h3>
        <h4>GREEMIND?</h4>
      </div>
      <div className="flex mt-3 px-3 space-x-8 ">
        <Image src={frame6} width={400} height={40} alt="plant pic" />
        <Image src={frame7}  width={200} height={40} alt="plant pic" />
      </div>
      
      </section>

</Wrapper>
      

<footer className="bg-blue-200 py-12 mt-10 text-xs pb-0 ">
       
      
        {/* Left Section: Brand and Socials */}
        <div className="flex justify-between pb-16  ">
        <div className="px-6">
          <h3 className="font-bold ml-6">GREENMIND</h3>
          <p className="text-gray-500 mt-5 ml-6 py-1  ">We help you find </p>
          <p className="text-gray-500 mb-4 ml-6 ">your dream plant</p>
          
          {/* Social Icons */}
        
           <div className="flex space-x-2">
             <a href="#" className="text-gray-700 hover:text-black  mb-4 ml-6 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75S6.624 21.75 12 21.75 21.75 17.376 21.75 12 17.376 2.25 12 2.25zM12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zM10.5 9h3v1.5h-3V9zm0 3h3v4.5h-3V12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M21.75 3.75H2.25A.75.75 0 001.5 4.5v15a.75.75 0 00.75.75h19.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM7.5 18.75h-3V9h3v9.75zm1.5-11.25a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm10.5 11.25h-3v-4.5c0-2.013-2.625-1.875-2.625 0v4.5h-3V9h3v1.5h.015C15.615 8.625 19.5 8.313 19.5 12.75v6z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M21.75 6.34a8.72 8.72 0 01-2.46.675 4.285 4.285 0 001.88-2.36 8.598 8.598 0 01-2.725 1.04 4.273 4.273 0 00-7.29 3.897A12.1 12.1 0 013 5.48a4.266 4.266 0 001.324 5.702A4.273 4.273 0 013 10.12v.055a4.27 4.27 0 003.432 4.183c-.383.105-.787.163-1.2.163a3.942 3.942 0 01-.805-.075 4.273 4.273 0 003.989 2.965 8.566 8.566 0 01-5.31 1.83 8.69 8.69 0 01-1.03-.06 12.085 12.085 0 006.557 1.915c7.88 0 12.196-6.523 12.196-12.186 0-.185-.004-.368-.012-.552a8.675 8.675 0 002.14-2.22z"/>
              </svg>
            </a>
            </div>
          </div>
        

        {/* Right Section: Links */}
        <div className="flex items-start h-1 ml-5 mr-2 text-center ">
    <div className="flex flex-col items-center mx-4">
        <h4 className="font-semibold">Information</h4>
        <ul className="mt-2 space-y-4 py-5">
            <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Product</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Blog</a></li>
        </ul>
    </div>
    
    <div className="flex flex-col items-center mx-4">
        <h4 className="font-semibold">Company</h4>
        <ul className="mt-2 space-y-4 py-5">
            <li><a href="#" className="text-gray-700 hover:text-black">Community</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Career</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Our story</a></li>
        </ul>
    </div>

    <div className="flex flex-col items-center mx-4">
        <h4 className="font-semibold">Contact</h4>
        <ul className="mt-2 space-y-4 py-5">
            <li><a href="#" className="text-gray-700 hover:text-black">Getting Started</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Pricing</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Resources</a></li>
        </ul>
    </div>
</div>
</div>
      
      {/* Copyright */}
      <p className="text-gray-500 text-sm px-10 py-4">2023 all Right Reserved Term of use GREENMIND</p>
    </footer>
</>
);
}



 




        


      