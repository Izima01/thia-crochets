import { useState } from 'react';
// import down from '../../assets/down.png';
import down from '../../assets/down.png';
// import ReactSlider from 'react-slider';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import '../../App.css';

type propType = {
    values: number[],
    setValues: (value: number | number[]) => void;
}

const FilterPrice = ({ values, setValues }: propType) => {
  const [showPriceRange, setshowPriceRange] = useState(false);

  return (
    <div className='mb-6 md:mb-4 md:w-full'>
        <button className="w-7/12 md:w-full flex justify-between items-center group" type='button' onClick={() => setshowPriceRange(!showPriceRange)}>
            <p className='font-semibold text-xl'>By Price</p>
            <Image src={down} alt="" className={`transition duration-300 ${showPriceRange ? 'rotate-180' : 'rotate-0'}`} />
        </button>
        <section className={`w-full overflow-hidden pl-3 md:pl-0 ${showPriceRange ? 'max-h-36 h-28' : 'max-h-0'}`}>
            <h4 className='py-8'>
                ${values[0]}.00 - ${values[1]}.00
            </h4>
            <Slider
                range
                style={{ width: '80%', margin: '0 auto' }}
                min={0} max={150}
                value={values}
                count={1}
                allowCross={false}
                onChange={setValues}
            />
            {/* <ReactSlider

                className="slider horizontal-slider"
                thumbClassName="w-6 h-6 rounded-full bg-white border-black border-2 thumb -mt-2.5"
                trackClassName="w-full bg-[#B8BCB5] h-1 rounded-full"
                // defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                // ariaValuetext={state => `Thumb value ${state.valueNow}`}
                pearling
                minDistance={20}
                min={0}
                max={100}
                value={values}
                onCH
                // onChange={setValues}
            /> */}
        </section>
    </div>
  )
}

export default FilterPrice