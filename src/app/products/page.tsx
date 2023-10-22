import React from 'react'

async function Products(){
  const response = await fetch('https://strapi-server-k4d2s.ondigitalocean.app/api/luccy-products/?populate=*')
  const products = await response.json()

  // const productImg = products.data[3].attributes.ProductImage.data.attributes.url
  // console.log("this is what youre looking for:" + productImg)


  return (
    <main className='bg-black min-h-screen grid grid-cols-1 md:grid-cols-2 px-6 lg:px-56 gap-20 py-16'>
      {products.data.map(product => 
        <div key={products.id} className="">
            <div className="w-full flex justify-center mx-2 p-10 bg-[#121212] hover:bg-black ease duration-75 mb-10">
                <img className="object-contain" src={product.attributes.ProductImage.data.attributes.url} alt="" />
            </div>
                        
            <div className='flex'>
              <p className="text-xl text-white">{product.attributes.ProductTitle}</p>
            </div>
        </div>
      )}
    </main>
  )

}

export default Products