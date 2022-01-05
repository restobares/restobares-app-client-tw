import React, { Fragment } from 'react';
import BackButton from '../BackButton';

const Themes = () => {
    return (
        <Fragment>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton/>
           <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32"> 
             <h1>Themes</h1>
           </div>
           <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
             Logout
           </button>
        </nav>
            <div className="container w-full mx-auto">
              <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal ">
    
                  {/* <!--themes--> */}
              
                  <div className="flex flex-wrap ">

                      {/* green */}

                      <div className="w-full md:w-1/2 xl:w-1/3 p-3 ">
                          <div className="bg-green-500 border rounded shadow p-2">
                              <div className="items-center p-14 justify-center text-2xl ">
                                  <h1 className='font-bold'>
                                      Click on the button to set this color
                                  </h1>
                                  <button className='bg-gray-300 rounded-xl w-20 mt-4'>
                                      Green
                                  </button>
                              </div>
                          </div>
                      </div>

                          {/* <!--orange--> */}
                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          <div className="bg-yellow-500 border rounded shadow p-2">
                              <div className="items-center p-14 justify-center text-2xl"> 
                                 <h1 className='font-bold'>
                                      Click on the button to set this color
                                  </h1>
                                  <button className='bg-gray-300 rounded-xl w-20 mt-4'>
                                      Yellow
                                  </button>
                              </div>
                          </div>
                      </div>

                          {/* <!--black--> */}
                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          <div className="bg-black border rounded shadow p-2">
                              <div className="items-center p-14 justify-center text-2xl">   
                                  <h1 className='font-bold'>
                                      Click on the button to set this color
                                  </h1>
                                  <button className='bg-gray-300 rounded-xl w-20 mt-4'>
                                      Black
                                  </button>
                              </div>
                          </div>
                      </div>

                          {/* <!--blue--> */}
                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          <div className="bg-blue-500 border rounded shadow p-2">
                              <div className="items-center p-14 justify-center text-2xl"> 
                                  <h1 className='font-bold'>
                                      Click on the button to set this color
                                  </h1>
                                  <button className='bg-gray-300 rounded-xl w-20 mt-4'>
                                      Blue
                                  </button>
                              </div>
                          </div>
                      </div>

                          {/* <!--red--> */}
                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          <div className="bg-red-500 border rounded shadow p-2">
                              <div className="items-center p-14 justify-center text-2xl"> 
                                  <h1 className='font-bold'>
                                      Click on the button to set this color
                                  </h1>
                                  <button className='bg-gray-300 rounded-xl w-20 mt-4'>
                                      Red
                                  </button>   
                              </div>
                          </div>
                      </div>

                          {/* <!--purple--> */}
                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          <div className="bg-purple-500 border rounded shadow p-2">
                              <div className="items-center p-14 justify-center text-2xl">
                                  <h1 className='font-bold'>
                                      Click on the button to set this color
                                  </h1>
                                  <button className='bg-gray-300 rounded-xl w-20 mt-4'>
                                      Purple
                                  </button>
                              </div>
                          </div>
                      </div>

                   </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Themes;