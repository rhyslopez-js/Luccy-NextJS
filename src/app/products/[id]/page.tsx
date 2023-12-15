
export async function generateStaticParams() {
  const res = await fetch('https://strapi-server-k4d2s.ondigitalocean.app/api/luccy-products/?populate=*')
  const products = await res.json()


  return products.data.map((product) => ({
    id: product.id.toString()
  }))

}

async function getProduct(id){
  const res = await fetch(`https://strapi-server-k4d2s.ondigitalocean.app/api/luccy-products/${id}/?populate=*`)
  const products = await res.json()
  return products
}

export default async function Product({params}) {
  const product = await getProduct(params.id)
  // console.log(product)

  return (
    <div className="lg:h-screen bg-black grid lg:grid-cols-2">
      <div className="lg:h-screen flex justify-center items-center lg:p-36 bg-[#121212] ">
        <img className="" src={product.data.attributes.ProductImage.data.attributes.url} alt="" />
      </div>

      <div className="min-h-screen  flex justify-center lg:p-36">
        <div className="">
          <h2 className="text-3xl font-black text-[#f1f1f1] uppercase mb-4">{product.data.attributes.ProductTitle}</h2>
          <p className="text-[#f1f1f1]">{product.data.attributes.ProductsDescription}</p>
        </div>
      </div>
    </div>
  )
}
 
