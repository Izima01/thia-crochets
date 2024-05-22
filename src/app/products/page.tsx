'use client'

import img1 from '../../assets/Carousel-1.png';
import { useCallback, useEffect, useState } from 'react';
import ProductCard, { productType } from '../../components/Marketplace/ProductCard';
import FilterCategory from '../../components/Marketplace/FilterCategory';
import {VscSettings} from 'react-icons/vsc';
import FilterPrice from '../../components/Marketplace/FilterPrice';
import { Loader as LoadingCard } from '../../components/Featured';
import MobileAside from '../../components/Marketplace/MobileAside';
import useStore from '../../store';
import Image, { StaticImageData } from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
// import {  } from 'next/router'

const Marketplace = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') as string || "");
  const [searchTerm, setsearchTerm] = useState(searchParams.get('search') as string || "");
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number | number[]>([
    Number(searchParams.get('minimum')) || 23,
    Number(searchParams.get('maximum')) || 141
  ]);

  const { addToLiked  } = useStore();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<StaticImageData>(img1);

  const [productsData, setProductsData] = useState<productType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<productType[]>([]);

  const createQueryString = useCallback((name: string, value: string) => {    
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  },[searchParams]);

  const handleClick =(i: number, image: StaticImageData, id: string)=> {
    if (i==0) {
      setSelectedImg(image);
      setOpen(true);
    }
    if (i==1) {
      addToLiked(id);
    }
    else {
      router.push(`/products/${id}`);
    }
  }

  const dataFetcher = async() => {
    try {
      const result = await fetch('/api/products');
      const data = await result.json();
      setFilteredProducts(data?.products);
      setProductsData(data?.products);
      // setFilteredProducts(data?.products.filter((prod:productType) => prod.name.toLowerCase().includes(searchTerm?.toLowerCase())));
    } catch(e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    dataFetcher();
  }, []);

  // searching for a product
  useEffect(() => {
    setFilteredProducts(productsData.filter((prod) => prod.name.toLowerCase().includes(searchTerm?.toLowerCase())));
    router.push(pathname + '?' + createQueryString('search', searchTerm));
  }, [searchTerm]);

  // sorting by name or price
  useEffect(() => {
    if (sortBy == 'name') {
      let nameSort = productsData.sort((a,b) => a.name.localeCompare(b.name));
      setFilteredProducts(nameSort);
    } else if (sortBy == 'price') {
      let priceSort = productsData.sort((a,b) => a.price - b.price);
      setFilteredProducts(priceSort);
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [sortBy]);
  
  // selecting a price range
  useEffect(() => {
    const newFilter = productsData.filter(prod => prod.price <= (priceRange as number [])[1] && prod.price >= (priceRange as number[])[0]);
    setFilteredProducts(newFilter);
  }, [priceRange as number[]]);
  
  // Search Params Update
  useEffect(() => {
    router.push(pathname + '?' +  createQueryString('maximum', `${(priceRange as number[])[1]}` ));
  }, [(priceRange as number[])[1]]);

  useEffect(() => {
    router.push(pathname + '?' +  createQueryString('minimum', `${(priceRange as number[])[0]}` ));
  }, [(priceRange as number[])[0]]);

  useEffect(() => {
    router.push(pathname + '?' +  createQueryString('sortBy', `${sortBy}`));
  }, [sortBy]);

  // // changing the category
  // useEffect(() => {
  //   setFilteredProducts(productsData.filter(prod => categories.includes(prod.category)));
  // }, [categories]);

  // productsData.map(el => console.log(el.id))

  const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.checked) {
      setCategories(prev => ([...prev, e.target.id]));
    } else {
      setCategories((prev) => prev?.filter(el => el !== e.target.id));
    }
  };

  return (
    <div className="w-[84%] mx-auto flex-col flex gap-12 md:gap-6 pb-6">
      {/* <h3 className="mt-7 text-[#a5625f] text-lg font-medium mb-4 hidden md:block">Home {'>'}Marketplace</h3> */}
      <header className='w-full md:flex p-4 hidden justify-between items-center pb-2 z-10 bg-white'>
        <input
          type="search"
          value={searchTerm}
          placeholder='Search...'
          onChange={(e) => setsearchTerm(e.target.value)}
          className='placeholder:text-white bg-gray-300 rounded-lg pl-2.5 lg:w-5/12 w-6/12 py-2'
        />
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className='text-xl w-4/12 justify-between items-center border border-black rounded-md focus:outline-none'
        >
          <option className='text-lg' value="" disabled>Sort by</option>
          <option className='text-lg' value="name">Name</option>
          <option className='text-lg' value="price">Price</option>
        </select>
      </header>
      <section className='flex flex-col md:flex-row md:gap-8'>

        {/* Mobile aside */}
        <MobileAside
          sortBy={sortBy}
          setSortBy={setSortBy}
          priceRange={priceRange as number[]}
          setPriceRange={setPriceRange}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
          changeCategory={changeCategory}
        />

        {/* Desktop aside */}
        <aside className="hidden md:block w-3/12 lg:w-2/12 mb-6 h-fit sticky top-4">
          <header className='flex justify-between items-center'>
            <label
              // type='button'
              className='flex w-full items-center text-xl font-semibold gap-4 py-1 mb-12 border-b-[#a5626f] border-b-4'>
              <VscSettings />
              Filter
            </label>
          </header>
          <section className='gap-6 flex flex-col'>
            <FilterPrice values={priceRange as number[]} setValues={setPriceRange} />
            
            <FilterCategory changeCategory={changeCategory} categories={categories} />
          </section>
        </aside>

        {/* Main page for products */}
        <main className='w-full grid justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
          {
            isLoading ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) :
            filteredProducts.map(({ id, images, name, rating, label, price, description }) => (
              <ProductCard description={description} key={id} id={id} name={name} label={label} rating={rating} handleClick={(i) => handleClick(i, images[0], id)}  images={images} price={price} />
            ))
          }
        </main>
      </section>
      <div
        className={`fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.9)] z-10 justify-center items-center transition-all duration-700 ease-in-out ${open ? 'flex' : 'opacity-0 hidden'}`}
      >
        <Image className='w-3/4 max-w-[800px] h-3/4' src={selectedImg} alt='big image' />
        <button className='fixed top-5 right-5' onClick={() => setOpen(false)}>
            <IoMdClose size={28} fill='white' />
        </button>
      </div>

    </div>
  )
}

export default Marketplace