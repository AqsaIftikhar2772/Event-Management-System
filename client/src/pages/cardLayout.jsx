import { useParams } from "react-router-dom"
import Card from "../components/Card"
import { useSelector } from "react-redux"

const CardLayout = () => {
    const { city, plus } = useParams()
    const state = useSelector(state => state.Product)
    const products = state.products
    console.log(products)
    return (
        <>
            <div className="p-10 ">
                <div className="capitalize text-center text-3xl font-medium">{city} - {plus}</div>
                <div className="grid grid-cols-4 mb-20">
                    {products?.map(item => (
                        <div key={item._id}>
                            <Card product={item}  style='w-72 h-80' style_two='w-60 py-1' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardLayout