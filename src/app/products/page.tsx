import ViewProduct from '@/components/ViewProduct'
import React from 'react'

async function Products(){
  const response = await fetch('https://strapi-server-k4d2s.ondigitalocean.app/api/luccy-products/?populate=*')
  const products = await response.json()

  // const productImg = products.data[3].attributes.ProductImage.data.attributes.url
  // console.log("this is what youre looking for:" + productImg)


  return (
    <main className='bg-black min-h-screen grid grid-cols-1 md:grid-cols-2 px-6 lg:px-56 lg:gap-20 gap-4 py-16'>
      {products.data.map((product:any) => 
        <div key={product.id} className="">
          <div>
            <div className="w-full flex justify-center p-10 lg:bg-[#121212] hover:bg-black ease duration-75 lg:mb-10">
              <img className="object-contain" src={product.attributes.ProductImage.data.attributes.url} alt="" />
            </div>
                        
            <div className='lg:flex lg:justify-between text-center'>
              <p className="text-md lg:text-2xl text-white">{product.attributes.ProductTitle}</p>
              <p className="text-md lg:text-2xl text-white">{"$" + product.attributes.Price}</p>
              {/* <ViewProduct id={product.id}></ViewProduct> */}
            </div>
          </div>
        </div>
      )}
    </main>
  )

}

export default Products