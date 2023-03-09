import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick';
import DiseaseCard from './DiseaseCard';
import style from './DiseaseItem.module.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { getDiseases } from '../../Store/Disease/Disease';
import IsLoading from '../isLoading/IsLoading';

export default function Kidney() {


  const { diseases, isLoading } = useSelector((state) => state.diseasesSlice)


  let data = diseases[4]
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDiseases());
  }, [])









  let arrowRef = useRef(null)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <div className='container my-5'>
        {diseases.length == 0 ? <IsLoading /> : <>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <img src="images/diseases/kidney.png" className='w-100' alt="kidney" />
            </div>
            <div className='col-md-8'>
              <h3 className='p-3 text-capitalize '>{data.type}</h3>
              <h5 className='px-3'>{data.question} :-</h5>
              <ul class=" ">
                <li class=" pb-1">{data.answer[0]}.</li>
                <li class=" pb-1">{data.answer[1]}.</li>
                <li class=" pb-1">{data.answer[2]}.</li>
                <li class=" pb-1">{data.answer[3]}.</li>
                <li class=" pb-1">{data.answer[4]}.</li>
                <li class=" pb-1">{data.answer[5]}.</li>
                <li class=" pb-1">{data.answer[6]}.</li>
                <li class=" pb-1">{data.answer[7]}.</li>
              
              </ul>

            </div>
          </div>
          <h3 className='fs-3'>Related products :</h3>


          <div className='row position-relative py-4'>
            <Slider ref={arrowRef} {...settings}>
              {data.products.map((product, index) => {
                return (<DiseaseCard key={product._id} product={product} />)
            })}
           
            </Slider>
            <button className='btn text-white'>
              <button onClick={() => arrowRef.current.slickPrev()} className={`${style.arrow, style.back}`}><IoIosArrowBack /></button>
              <button onClick={() => arrowRef.current.slickNext()} className={`${style.arrow}`}><IoIosArrowForward /></button>
            </button>
          </div>
        </>}
      </div>

    </>
  )
}
