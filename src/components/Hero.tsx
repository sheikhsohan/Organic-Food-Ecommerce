import { BsArrowRight } from 'react-icons/bs';

import heromain from '../assets/banner/slider1_mixy2.webp';
import herorightfirst from '../assets/banner/img1_top_mixy2.webp';
import herorightsecond from '../assets/banner/slider2_mixy2.webp';

const Hero = () => {
  return (
    <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
                <img
                className="w-full h-full object-cover rounded-lg"
                src={heromain} alt="hero-banner-1" />

                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                    <p className='text-2xl hidden sm:block'>100% Original Potato</p>
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried Fruits Best Healthy</h2>
                    <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At</p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>
                        $18.36
                    </div>
                        <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>
                            Shop Now <BsArrowRight /> {''}
                        </div>
                </div>
            </div>
            <div className='relative'>
                <img
                    className='w-full h-full object-cover rounded-lg'
                src={herorightfirst} alt="herorightfirst" />
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                    <h2 className='text-2xl sm:text-2xl md:text-4xl font-bold'>Fresh Fruit Kiwis</h2>
                    <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At</p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>
                        $39.99
                    </div>
                        <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>
                            Shop Now <BsArrowRight /> {''}
                        </div>
                </div>
            </div>
            <div className='relative'>
                <img
                    className='w-full h-full object-cover rounded-lg'
                src={herorightsecond} alt="herorightfirst" />
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                    <h2 className='text-2xl sm:text-2xl md:text-4xl font-bold'>Fresh Fruit Kiwis</h2>
                    <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At</p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>
                    $39.99
                    </div>
                        <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>
                            Shop Now <BsArrowRight /> {''}
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;