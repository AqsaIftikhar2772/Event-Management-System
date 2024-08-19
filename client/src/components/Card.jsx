// import '../css/card.css'
/* eslint-disable react/prop-types */
import { FaHouse } from "react-icons/fa6"
import { FaBath } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { useParams } from "react-router-dom";
const Card = ({product, style, style_two}) => {
  const {city, plus} = useParams()
  return (
    <>
      <div className={`${style} relative my-5`}>
        <div className="w-full h-full">
          <img src={product?.images || product?.venue?.images} className="w-full h-full object-cover rounded-lg"/>
        </div>
        <div className="absolute bottom-0 text-white">
          <div className="inline-flex flex-col gap-1 capitalize px-2">
              <div className="text-sm font-bold bg-[#C3A043] rounded px-2">{plus || product?.venue?.plusPoint?.plusPoint}</div>
            <div className="flex gap-2">
              <div className="text-sm font-bold bg-[#C3A043] rounded px-3">{city || product?.venue?.plusPoint?.city?.city}</div>
            </div>
          </div>
          <div className={`text-lg text-black bg-white font-bold ${style_two} mt-2 px-3`}>{product?.title || product?.venue?.title}</div>
        </div>
        <div className="flex items-center justify-between mx-auto my-2">
          <div className="flex items-center gap-1">
            <FaHouse className="text-[#C3A043]" />
            <p className="text-sm">{product.kanal} kanal</p>
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-[#C3A043]" />
            <p className="text-sm">{product.bath} Baths</p>
          </div>
          <div className="flex items-center gap-1">
            <FaCar className="text-[#C3A043]" />
            <p className="text-sm">{product.parking} Parking</p>
          </div>
        </div>
        <div className="flex items-center justify-between my-1">
          <button className="text-white font-medium tracking-wide bg-[#C3A043]  hover:bg-opacity-60 rounded-md px-3 py-1" >RS {product?.price || product?.venue?.price}</button>
          <button className="text-white font-medium tracking-wide bg-[#C3A043] rounded-md  hover:bg-opacity-60 px-3 py-1" >Learn more</button>
        </div>
      </div>
    </>
  )
}

export default Card