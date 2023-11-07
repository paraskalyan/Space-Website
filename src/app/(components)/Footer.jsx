import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const imgWidth = 40;
    const imgHeight = 40;
  return (
    <div className='bg-black flex flex-col items-center justify-center h-[20vh] max-sm:h-[10vh] '>
            <div className='flex gap-2'>
                <Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/mercury.png' width={imgWidth} height={imgHeight}/>
                <Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/venus.png' width={imgWidth} height={imgHeight}/>
                <Link href="/earth"><Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/earth.png' width={imgWidth} height={imgHeight}/></Link>
                <Link href="/mars"><Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/mars.png' width={imgWidth} height={imgHeight}/></Link>
                <Link href="/jupiter"><Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/jupiter.png' width={imgWidth} height={imgHeight}/></Link>
                <Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/saturn.png' width={imgWidth} height={imgHeight}/>
                <Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/neptune.png' width={imgWidth} height={imgHeight}/>
                <Image className='max-sm:h-[20px] max-sm:w-[20px] hover:scale-110 transition' src='/uranus.png' width={imgWidth} height={imgHeight}/>
            </div>
            {/* <div className='text-white'>To the Moon, Mars and beyond</div> */}
            <div className='text-white font-light mt-4 max-sm:mt-1'>Designed by <a target='_blank' href='https://www.x.com/paras_eth'>@paras_eth</a></div>
    </div>
  )
}

export default Footer;