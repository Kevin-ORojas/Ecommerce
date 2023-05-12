import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { get } from "react-hook-form"
import ProductCard from "../components/Home/ProductCard"
import { axiosEcommerce } from "../utils/configAxios"


const Home = () => {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [currentCategory, setCurrentCategory] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductName = e.target.productName.value
    setProductName(newProductName)
  }

  const productsByName = useMemo(() => {
    return products.filter((product) => product.title.toLowerCase().includes(productName.toLowerCase()))
  }, [productName, products])

  const handleClickCategory = (e) => {
    setCurrentCategory(Number(e.target.dataset.category))
  }

  useEffect(() => {

    axiosEcommerce
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (currentCategory === 0) {

      axiosEcommerce
        .get("products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }
  }, [currentCategory])

  useEffect(() => {
    if (currentCategory != 0) {
      axiosEcommerce
        .get(`products?categoryId=${currentCategory}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }

  }, [currentCategory])

  return (
    <main className="mt-2">
      <form onSubmit={handleSubmit}>
        <div className="mt-5 flex  justify-center">
          <input className="py-2 rounded-[8px] border-[1px] px-2 shadow-2xl sm:px-24 font-semibold " id="productName" type="text" placeholder="What are you looking for?" />
          <button className="rounded-[8px] flex h-11 border-[1px] px-2 hover:bg-blue-500/90 bg-blue-500 items-center"><i className='bx bx-search text-white '></i></button>
        </div>
      </form>



      <ul className=" flex text-sm mt-4 font-semibold gap-1 justify-center 
            sm:gap-6 items-center justify-center">
        <li className="cursor-pointer hover:text-blue-500" onClick={handleClickCategory} data-category={0}>All</li>
        {
          categories.map(category => <li className="cursor-pointer hover:text-blue-500" onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>)
        }
      </ul>

      <section className=" grid gap-4 pb-20 mt-6 px-6 sm:gap-8 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(260px,_200px))]  justify-center">
        {
          productsByName.map(product => <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Home