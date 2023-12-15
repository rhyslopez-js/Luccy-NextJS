import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles.module.css'

export default function Home() {
  return (
    <main className='grid lg:grid-cols-2 h-screen bg-black'>
      
      <div className='flex h-full items-end bg-black lg:p-36'>
        <div className=''>
          <img className='w-1/2 mb-4' src="luccy2d.png" alt="" />
          <h2 className='text-2xl font-black text-[#f1f1f1]'>LOO · SEE</h2>
          <p className='text-lg font-black text-[#f1f1f1]'>CREATIVE</p>
          <p className='text-lg font-black text-[#f1f1f1]'>CONVENIENCE</p>
        </div>
      </div>


      <div className='lg:h-screen lg:p-36 flex justify-end items-end'>
        <ul className=''>
          <a href="/products"><li className='text-[#f1f1f1] text-6xl mb-4 font-black text-end ease duration-75 nav-menu'>SHOP</li></a>
          <a href=""><li className='text-[#f1f1f1] text-6xl mb-4 font-black text-end ease duration-75 nav-menu'>SUPPORT</li></a>
          <a href=""><li className='text-[#f1f1f1] text-6xl mb-4 font-black text-end ease duration-75 nav-menu'>TRACKING</li></a>
        </ul>
      </div>
    
    </main>
  )
}


{/* <Link href="/products"><button className='border px-7 py-3 rounded-full text-[#f1f1f1] hover:bg-[#121212] duration-75 ease'>Shop Now</button></Link> */}
