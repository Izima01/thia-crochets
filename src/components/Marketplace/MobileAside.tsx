/* eslint-disable react/prop-types */
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import down from '../../assets/down.png';
import { productType } from "./ProductCard";
import Image from "next/image";

type propType = {
    setShowFilters: (val: boolean) => void,
    showFilters: boolean,
    sortBy: string,
    setSortBy: (val: string) => void,
    priceRange: number[],
    // setPriceRange: number,
    setPriceRange: (value: number[] | number) => void,
    changeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MobileAside = ({ setShowFilters, showFilters, sortBy, setSortBy, priceRange, setPriceRange, changeCategory }: propType) => {
  return (
    <aside className="md:hidden">
        <h3 className="mt-7 text-[#a5625f] text-lg font-medium mb-4">Home {'>'}Marketplace</h3>
        <form className="w-full bg-white p-5 mt-4 rounded-2xl transition-all duration-700 ease-in-out">
            <header className='flex justify-between items-center'>
                <button
                    type='button'
                    className={`flex w-4/12 items-center text-xl justify-between py-1 ${showFilters ? 'border-b-[#a5626f] border-b-4' : ''}`}
                    onClick={() => setShowFilters(!showFilters)}
                >
                    Filters
                    <Image src={down} alt="" className={`transition duration-500 ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='flex w-4/12 text-xl justify-between items-center'
                >
                <option className='text-lg' value="" disabled>Sort by</option>
                <option className='text-lg' value="name">Name</option>
                <option className='text-lg' value="price">Price</option>
                </select>
            </header>
            <section style={{ transition: "max-height 0.5s ease-out" }} className={`gap-6 flex flex-col overflow-hidden ${showFilters ? ' mt-6 max-h-none' : 'max-h-0'}`}>
                <FilterPrice values={priceRange} setValues={setPriceRange} />
                <FilterCategory
                    changeCategory={changeCategory}
                />
            </section>
        </form>
    </aside>
  )
}

export default MobileAside