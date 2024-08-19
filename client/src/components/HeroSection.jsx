
import { useState } from "react";
import Carousel from "./Carousel"
import Footer from "./Footer";
import Service_Detail from "./Service_Detail";
import SingUp_Form from "./SingUp_Form";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action";
import MostViewed from "../pages/mostViewed";


const HeroSection = () => {
  const [selectCity, setSCity] = useState('')
  const [selectPlus, setSPoint] = useState('')
  const [city, setCity] = useState([])
  const [plus, setPlus] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchCity = async () => {
      const url = `http://localhost:2004/api/get-all-cities`
      const response = await axios.get(url)
      setCity(response?.data?.data)
    }
    fetchCity()
  }, [])
  useEffect(() => {
    const fetchPlusP = async () => {
      const url = `http://localhost:2004/api/get-all-plusP/${selectCity}`
      const response = await axios.get(url)
      setPlus(response?.data?.data)
    }

    selectCity && fetchPlusP()
  }, [selectCity])

  const dispatch = useDispatch()

  const handleSubmit = async () => {
    dispatch(fetchProducts(selectCity, selectPlus))
    navigate(`/card/${selectCity}/${selectPlus}`)
  }
  return (
    <>
      <div className="heroSeection">
        <div>
          <h1 className="heroH1">Explore Venues</h1>
        </div>
        <div className="flex justify-center gap-5 my-4">
          <select className="capitalize rounded-lg p-2 w-60"
            name="city"
            onChange={(e) => setSCity(e.target.value)}
            defaultValue=''>
            <option value="" selected disabled>Select City... </option>
            {city?.map(item => (
              <option key={item._id} value={item.city} className="capitalize">{item.city}</option>
            ))}
          </select>
          {plus?.length === 0 ? null : (
            <select className="capitalize rounded-lg p-2 w-60"
              name="type"
              onChange={(e) => setSPoint(e.target.value)}
              defaultValue=''>
              <option value="" selected disabled>Select types... </option>
              {plus?.map(item => (
                <option key={item._id} value={item.plusPoint} className="capitalize">{item.plusPoint}</option>
              ))}
            </select>
          )}
        </div>
        <div className="flex justify-center w-1/6 mx-auto">
          <button className="text-lg font-bold text-white bg-[#E3C363] rounded-md hover:rounded-full  py-1 w-full" onClick={handleSubmit}>Explore Venues</button>
        </div>
      </div>
      <Carousel />
      <MostViewed />
      <Service_Detail />
      <SingUp_Form />
      <Footer />

    </>
  );
};

export default HeroSection;
