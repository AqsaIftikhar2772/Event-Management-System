import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"

const MostViewed = () => {
    const [venue, setVenue] = useState([])
    useEffect(() => {
        const fetchViewdProd = async () => {
            const response = await axios.get('http://localhost:2004/api/get-most-searched-venue')
            const venueData = response.data.data
            setVenue(venueData)
        }

        fetchViewdProd()
    }, [setVenue])
    console.log(venue)
    return (
        <>
            {venue?.length !== 0 && (
                <div className="mx-40 my-20">
                    <div className={`text-3xl text-slate-800 font-bold ${venue.length > 3 && "text-center"}`}>Most Searched Venues</div>
                    <div className="grid grid-cols-4 gap-10">
                        {venue?.map(item => (
                            <Card key={item._id} product={item} style='w-60 h-72' style_two='w-52' />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default MostViewed
