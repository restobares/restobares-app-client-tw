import React, { Fragment } from 'react';
import BackButton from '../BackButton';

const Analytics = () => {

    return (
        <Fragment>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton/>
           <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32"> 
             <h1>Analytics</h1>
           </div>
           <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
             Logout
           </button>
        </nav>

            <div className="container w-full mx-auto">
              <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    
                  {/* <!--divs--> */}
              
                  <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          {/* <!--Revenue--> */}
                          <div className="bg-white border rounded shadow p-2">
                              <div className="flex flex-row items-center">
                                  <div className="flex-shrink pr-4">
                                      <div className="rounded p-1 bg-green-600">
                                        <img src="https://img.icons8.com/windows/50/000000/bank.png" width="45" alt="" />
                                      </div>
                                  </div>
                                  <div className="flex-1 text-right md:text-center">
                                      <h5 className="font-bold uppercase text-gray-500">Total Revenue</h5>
                                      <h3 className="font-bold text-3xl">
                                          $6666.66
                                      </h3>
                                  </div>
                                    <span className="float-left">
                                      <img src="https://img.icons8.com/material-rounded/48/48bb78/sort-up.png" width="50" alt="" />
                                    </span>
                              </div>
                          </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          {/* <!--Users per month--> */}
                          <div className="bg-white border rounded shadow p-2">
                              <div className="flex flex-row items-center">
                                  <div className="flex-shrink pr-4">
                                      <div className="rounded p-1 bg-pink-600">
                                         <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-users-cv-resume-flatart-icons-outline-flatarticons.png" width="45" alt="" />
                                      </div>
                                  </div>
                                  <div className="flex-1 text-right md:text-center">
                                      <h5 className="font-bold uppercase text-gray-500">Total Users per Month</h5>
                                      <h3 className="font-bold text-3xl">666 <span className="text-pink-500"></span></h3>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          {/* <!--Users per day--> */}
                          <div className="bg-white border rounded shadow p-2">
                              <div className="flex flex-row items-center">
                                  <div className="flex-shrink pr-4">
                                      <div className="rounded p-1 bg-yellow-600">
                                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-advertising-kiranshastry-lineal-kiranshastry-6.png" width="45" alt="" />
                                      </div>
                                  </div>
                                  <div className="flex-1 text-right md:text-center">
                                      <h5 className="font-bold uppercase text-gray-500">Users today</h5>
                                      <h3 className="font-bold text-3xl">66 <span className="text-yellow-600"></span></h3>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          {/* <!--Orders per month--> */}
                          <div className="bg-white border rounded shadow p-2">
                              <div className="flex flex-row items-center">
                                  <div className="flex-shrink pr-4">
                                      <div className="rounded p-1 bg-blue-600">
                                        <img src="https://img.icons8.com/ios/50/000000/order-history.png" width="45" alt="" />
                                        {/* <img src="https://img.icons8.com/ios-glyphs/30/f56565/sort-down.png"/> */} {/* down btn */}
                                      </div>
                                  </div>
                                  <div className="flex-1 text-right md:text-center">
                                      <h5 className="font-bold uppercase text-gray-500">Orders per Month</h5>
                                      <h3 className="font-bold text-3xl">666 Orders</h3>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          {/* <!--Orders per day--> */}
                          <div className="bg-white border rounded shadow p-2">
                              <div className="flex flex-row items-center">
                                  <div className="flex-shrink pr-4">
                                      <div className="rounded p-1 bg-indigo-600">
                                        <img src="https://img.icons8.com/ios/50/000000/create-order--v1.png" width="45" alt="" />
                                      </div>
                                  </div>
                                  <div className="flex-1 text-right md:text-center">
                                      <h5 className="font-bold uppercase text-gray-500">Orders Today</h5>
                                      <h3 className="font-bold text-3xl">66 Orders</h3>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                          {/* <!--Feedback--> */}
                          <div className="bg-white border rounded shadow p-2">
                              <div className="flex flex-row items-center">
                                  <div className="flex-shrink pr-4">
                                      <div className="rounded p-1 bg-red-600">
                                        <img src="https://img.icons8.com/ios/50/000000/feedback.png" width="45" alt="" />
                                      </div>
                                  </div>
                                  <div className="flex-1 text-right md:text-center">
                                      <h5 className="font-bold uppercase text-gray-500">Feedbacks</h5>
                                      <h3 className="font-bold text-3xl">45 <span className="text-red-500"></span></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                   </div>
                </div>
            </div>

            {/* Charts */}

            <div className='ml-96'>
             <img src="https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png" className='ml-40' width="700" alt="" />
            </div>
        </Fragment>
    )
}

export default Analytics;