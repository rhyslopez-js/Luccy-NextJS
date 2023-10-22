import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
        <div className='text-center'>
          <h1 className='mb-5'>Logo</h1>
          <Link href="/products"><button className='border px-5 py-3 rounded-2xl bg-[#007049] text-[#f1f1f1]'>Shop Now</button></Link>
        </div>
    </main>
  )
}
