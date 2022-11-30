import React from 'react'
import { useState, useEffect } from 'react'
import "./Slider.css"
import { sliderData } from '../../Data/Data'


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length

    const autoScroll = true;
    let slideInterval:any;
    let intervalTime = 8000;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % 2)
    }

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []) 

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <div className="slider">
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide" : ""} key={`slide-${index}`}>
                        {currentSlide === index && (
                            <div className='container flex-col md:flex-row items-center justify-center'>
                                <div className='content md:w-[41%] left-[5rem]'>
                                    <div className='w-full'>
                                        <h1 className="text-8xl mt-0 mb-6 text-[#00A839]">{sliderData[(index + 1) % 2].heading}</h1>
                                        <p className='text-xl mb-6'>{sliderData[(index + 1) % 2].discription}</p>
                                        <div className="flex flex-wrap gap-6">
                                            <div className="flex items-center mr-4">
                                                <input id="red-radio" type="radio" value="" className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ml-3 text-xl font-medium text-gray-900 dark:text-gray-300">medium</label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="green-radio" type="radio" value="" className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ml-3 text-xl font-medium text-gray-900 dark:text-gray-300">large</label>
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-end mt-10'>
                                          <button
                                              type="button"
                                              data-mdb-ripple="true"
                                              data-mdb-ripple-color="light"
                                              className="inline-block px-6 py-2.5 bg-[#545454] text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-[#6a6c6e] hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                          >Book a table</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='contentWithAnimation md:w-[41%] left-[5rem]'>
                                    <div className='w-full'>
                                        <h1 className="text-8xl mt-0 mb-6 text-[#00A839]">{slide.heading}</h1>
                                        <p className='text-xl mb-6'>{slide.discription}</p>
                                        <div className="flex flex-wrap gap-6">
                                            <div className="flex items-center mr-4">
                                                <input id="red-radio" type="radio" value="" className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ml-3 text-xl font-medium text-gray-900 dark:text-gray-300">medium</label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="green-radio" type="radio" value="" className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ml-3 text-xl font-medium text-gray-900 dark:text-gray-300">large</label>
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-end mt-10'>
                                          <button
                                              type="button"
                                              data-mdb-ripple="true"
                                              data-mdb-ripple-color="light"
                                              className="inline-block px-6 py-2.5 bg-[#545454] text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-[#6a6c6e] hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                          >Book a table</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="slideImgContainer w-[80%] md:w-[41%] md:right-[5rem] flex justify-center">
                                    <img className={'slideImg rounded-2xl h-[85%] mt-6'} src={sliderData[(index + 1) % 2].image} alt="slide"></img>
                                    <img className={'slideImgWithAnimation rounded-2xl h-[85%] mt-6'} src={slide.image} alt="slide"></img>
                                </div>
                            </div>
                        )}
                        <div className='fixed right-[14vw] bottom-4 w-[25vw] h-[12.5vh] shadow-lg rounded-xl z-40'>
                            <div className='w-full flex justify-around items-center border-b-2'>
                              <span>DISCOUNT COUPON</span>
                              <div className="flex flex-col items-center">
                                <div className="inline-flex">
                                  <button className="inline-flex items-center px-2 py-1 text-sm text-[#2C2C2C] font-medium rounded-l">
                                      <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                      Prev
                                  </button>
                                  <button className="inline-flex items-center px-2 py-1 text-sm text-[#2C2C2C] font-medium rounded-r">
                                      Next
                                      <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className='w-full flex justify-between'>
                              <div className='h-full flex flex-row'>
                                <img className={'rounded-2xl h-[8vh] ml-2'} src={sliderData[0].image} alt="slide"></img>
                                <div className='flex flex-col h-[8vh] items-center justify-center ml-3'>
                                  <span>FISH SALAD</span>
                                  <span className='text-sm'>MEDIUM</span>
                                </div>
                              </div>
                              <div className='h-full flex flex-row'>
                                <div className='flex flex-col h-[8vh] items-center justify-center ml-3 mr-2'>
                                  <span className='text-sm line-through'>$14.99</span>
                                  <span className='text-sm'>$7.90</span>
                                </div>
                                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 mr-2 mt-3.5 mb-3.5 dark:focus:ring-yellow-900">Get Coupon</button>
                              </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Slider