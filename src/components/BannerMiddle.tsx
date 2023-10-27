import bannerOne from '../assets/banner/img1_banner1_mixy1.webp'
import bannerTwo from '../assets/banner/img1_banner1_mixy2.webp'

const BannerMiddle = () => {
  return (
    <>
    <div className='container pt-16'>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
            <div className='overflow-hidden rounded-lg'>
                <img src={bannerOne} alt="banner" className='w-full hover:scale-105 transition-transform'/>
            </div>
            <div className='overflow-hidden rounded-lg'>
                <img src={bannerTwo} alt="banner" className='w-full hover:scale-105 transition-transform'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default BannerMiddle