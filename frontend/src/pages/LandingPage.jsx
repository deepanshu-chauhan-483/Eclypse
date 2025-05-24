import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import hero from "../assets/Hero_mp4.png"
import hero2 from "../assets/Hero2.png"
import frame19 from "../assets/Frame_19.png"
import frame18 from "../assets/Frame_18.jpg"
import frame17 from "../assets/Frame_17.jpg"
import frame16 from "../assets/Frame_16.jpg"
import Ellipse1 from "../assets/Ellipse1.png"
import Ellipse2 from "../assets/Ellipse2.png"
import Ellipse3 from "../assets/Ellipse3.png"
import ProductCart from '../components/ProductCart'
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react"
import { ChevronDown, ChevronUp } from "../components/Icons"
import VideoWithFallback from '../components/VideoWithFallback'

const LandingPage = () => {

  
  return (
    <div className="lg:mx-20 mx-4">

    {/* hero section */}
  <div className='w-full pt-[150px] '>
    <div className="flex items-baseline justify-between mb-8">
      <p className='text-white text-8xl font-thin'>Eclypse<span className='text-white text-4xl align-text-top'>®</span></p>
      
      <p className='text-white'>©2025</p>
    </div>
    <VideoWithFallback
        videoSrc={video1}
        fallbackImg={hero}
        className="col-span-3 md:col-span-2 bg-green-200 md:h-[476px] h-[200px] border rounded-lg"
      />
   
  </div>

  {/* 2nd section */}
  <div className='w-full mt-[150px]'>
  
  <div className="flex items-baseline justify-between mb-8">
    <p className='text-white lg:text-5xl text-4xl leading-tight font-sans font-stretch-expanded'>Rooted in a philosophy of quiet luxury, our <br /> garments are designed to speak softly in <br /> cut, in movement, in presence.</p>
    
    
  </div>
  <a
  href="#"
  className="mt-[100px] text-white lg:text-3xl text-2xl underline transition-transform duration-300 hover:scale-105 flex items-center"
>
  Learn more about Eclypse <span className="ml-2"><MdOutlineArrowOutward /></span>
</a>

{/* <!-- Grid 1 --> */}
<div class="grid grid-cols-3 gap-4 mt-[150px] w-full">
  {/* Video container */}
  <VideoWithFallback
        videoSrc={video2}
        fallbackImg={hero2}
        className="col-span-3 md:col-span-2 bg-green-200 md:h-[476px] h-[200px] border rounded-lg"
      />

  {/* Frame18 (hidden on sm) */}
  <div class="hidden md:block col-span-1 md:h-[476px] h-[200px]">
    <div class="relative group w-full h-full border rounded-md overflow-hidden">
      <img src={frame18} alt="" className="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute bottom-4 left-4 text-white text-4xl font-semibold opacity-0 leading-tight font-sans font-stretch-expanded group-hover:opacity-100 transition-opacity duration-300">
      Premium wool blend in signature vermillion
      </div>
    </div>
  </div>
</div>

{/* Grid 2 */}
<div class="grid grid-cols-3 gap-4 mt-4">
  {/* Frame17 */}
  <div class="md:h-[400px] h-[200px]">
    <div class="relative group w-full h-full border rounded-md overflow-hidden">
      <img src={frame17} alt="" className="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute bottom-4 left-4 text-white lg:text-4xl text-2xl font-semibold leading-tight font-sans font-stretch-expanded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Discreet side pockets with clean finish
      </div>
    </div>
  </div>

  {/* Frame16 */}
  <div class="md:h-[400px] h-[200px]">
    <div class="relative group w-full h-full border rounded-md overflow-hidden">
      <img src={frame16} alt="" className="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute bottom-4 left-4 text-white lg:text-4xl text-2xl font-semibold leading-tight font-sans font-stretch-expanded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Hand-cut and assembled in small batches
      </div>
    </div>
  </div>

  {/* Frame19 - hidden on sm */}
  <div class="hidden md:block md:h-[400px] h-[200px]">
    <div class="relative group w-full h-full border rounded-md overflow-hidden">
      <img src={frame19} alt="" className="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
      <div class="absolute inset-0 flex items-center justify-center text-white leading-tight font-sans font-stretch-expanded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <p className='text-white text-8xl font-thin'>
    Eclypse<span className='text-white text-4xl align-text-top'>®</span>
  </p>
</div>

    </div>
  </div>

  {/* Frame18 on small screen */}
  <div class="md:hidden md:h-[400px] h-[200px]">
    <div class="relative group w-full h-full border rounded-md overflow-hidden">
      <img src={frame18} alt="" className="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute bottom-4 left-4 text-white lg:text-4xl text-2xl font-semibold leading-tight font-sans font-stretch-expanded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Premium wool blend in signature vermillion
      </div>
    </div>
  </div>
</div>


<div className='text-white text-5xl leading-tight font-sans mt-[100px]'>Silhouette No. 1 - Vermilion</div>

<div className="w-full h-full mt-[100px]"><ProductCart/></div>




 
</div>

{/* 3rd section */}<div
      className="w-full h-full bg-black text-white lg:text-4xl text-3xl mt-[100px]"
      
      >
        <div className="mx-auto px-4 py-8">
          <DropdownSection
            title="Size & Fit"
            content="Our garments are designed with a relaxed fit in mind. For a more tailored look, we recommend sizing down. All measurements are taken flat and in inches. Small: Chest 38-40, Length 27. Medium: Chest 42-44, Length 28. Large: Chest 46-48, Length 29. X-Large: Chest 50-52, Length 30."
          />
  
          <DropdownSection
            title="Delivery & Returns"
            content="Free standard shipping on all orders over $100. Expedited shipping available at checkout. Orders typically ship within 1-2 business days. Returns accepted within 30 days of delivery. Items must be unworn with original tags attached. Return shipping is free for customers in the continental US."
          />
  
          <DropdownSection
            title="How This Was Made"
            content="Each piece is meticulously crafted in our atelier using traditional techniques passed down through generations. We source only the finest materials from sustainable suppliers. The dyeing process uses natural pigments and takes up to three days to achieve the perfect color depth. Final details are hand-finished by our master craftspeople."
          />
  
  <div className="bg-black text-white py-16">
    <div className="mx-auto px-6">
      {/* Header */}
      <h2 className="text-xl uppercase tracking-widest mb-16">Our Customers</h2>
      
      {/* Testimonial section */}
      <div className="flex justify-between items-center">
        {/* Quote section */}
        <div className="max-w-2xl">
          <div className="relative">
            <span className="text-7xl absolute -left-12 top-0 font-serif">"</span>
            <p className="lg:text-5xl text-4xl font-light leading-tight">
              Understated, but unforgettable. It 
              feels like it was made for me
            </p>
          </div>
          
          {/* Attribution */}
          <div className="mt-10">
            <p className="text-xl">Random Woman</p>
            <p className="text-gray-500 mt-1">NY, USA</p>
          </div>
        </div>
        
        {/* Customer images */}
        <div className=" flex flex-col space-y-4 justify-center align-center">
         
          
          {/* Customer profile images - you'll replace the placeholder URLs with your actual image sources */}
          <div className="w-[126px] rounded-full overflow-hidden">
            <img 
              src={Ellipse1}
              alt="Customer 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[69px] h-16 rounded-full overflow-hidden">
            <img 
              src={Ellipse2}
              alt="Customer 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[69px] h-16 rounded-full overflow-hidden">
            <img 
              src={Ellipse3}
              alt="Customer 3" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <footer className="bg-black text-white py-16 px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and scroll to top button */}
        <div className="flex justify-between items-start mb-20">
          <div className="flex items-center">
            <h2 className="text-5xl font-light">Eclypse</h2>
            <svg className="w-5 h-5 ml-2 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
  className="w-16 h-16 bg-white rounded-full flex hover:bg-gray-200 items-center justify-center"
  aria-label="Scroll to top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <svg
    className="w-6 h-6 text-black"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19V5M12 5L5 12M12 5L19 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left column - Navigation */}
          <div className="space-y-4 text-xl">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
                <span className="mx-4 text-gray-600">/</span>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
                <span className="mx-4 text-gray-600">/</span>
                <a href="#" className="hover:text-gray-300">
                  Buy
                </a>
              </div>
              <div className="flex items-center">
                <a href="#" className="hover:text-gray-300">
                  Our Customers
                </a>
                <span className="mx-4 text-gray-600">/</span>
                <a href="#" className="hover:text-gray-300">
                  Contacts
                </a>
              </div>
            </nav>
          </div>

          {/* Right column - Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4">Contact</h3>
              <p className="text-xl font-light">+91 123-456-7890</p>
            </div>

            <div>
              <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4">Email</h3>
              <a href="mailto:eclypse@gmail.com" className="text-xl font-light hover:underline">
                eclypse@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-right ">
          <p className="text-gray-500 text-sm">© Eclypse 2025</p>
        </div>
      </div>
    </footer>
        </div>
      </div>

</div>
    )
}

function DropdownSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800 py-10">
      <button className="w-full flex justify-between items-center py-2" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && <div className="py-4 text-xl text-gray-300  leading-relaxed">{content}</div>}
    </div>
  )
}

export default LandingPage