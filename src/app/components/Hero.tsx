// components/Hero.js
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] bg-yellow-300 ">
      {/* Background Image */}
      <Image
        src="/ZFclothes.png"
        alt="ZF Clothes Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      
      {/* Text on top of the image */}
      <div className="absolute top-0 left-0 flex flex-col justify-center h-full pl-10 z-10">
        <h1 className="text-3xl font-bold body-font text-black hidden md:block"><i>Fashion Meets</i> <big>Elegance</big></h1>
        <p className="mt-4 text-xl text-black hidden md:block">
          <i>Explore our <b>collection</b></i>.
        </p>
        <div>
        <button className="mt-6 px-6 py-2 bg-black text-white text-sm rounded-lg hidden md:block">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
