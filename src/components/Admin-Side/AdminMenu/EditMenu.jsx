import React, { Fragment, useState } from 'react'
import BackButton from '../BackButton';
import { Switch } from '@headlessui/react'

const EditMenu = () => {

    const [enabled, setEnabled] = useState(false)


    return (
        <Fragment>
        <div>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton/>
           <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32"> 
             <h1>Edit&nbsp;Menus</h1>
           </div>
           <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
             Logout
           </button>
        </nav>
        </div>

        <div className="flex h-14 w-full mt-2 border-b-2 border-pink-700">
          <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0 "> 
            <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full "
            src="data:image/png;base64,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"
            alt=""/>
          </div>
          <div className="float-left align-baseline text-left inline-block h-4 w-full">
            <div className=" inline-block w-full align-bottom">
              <p className="inline-block ml-2 text-black font-semibold text-truncate text-sm">Las patatas</p>
              <button className=" align-bottom inline-block  font-semibold float-right mr-2 mb-1 text-sm bg-pink-500 w-10 rounded-xl">Edit</button>
              <p className=" font-semibold inline-block float-right mr-6 text-sm"> 10</p>
              <p className=" font-semibold inline-block float-right text-left mr-1 text-sm "> $ </p>
            </div> 
              <hr className=" border-pink-500 border-1  mx-2" />

            <div className="float-right h-6 mr-1 mt-1"> 
            {/* Boton switch - ui */}
              <Switch
                checked={enabled}
                onChange={setEnabled} 
                className={`${
                    enabled ? 'bg-pink-500' : 'bg-gray-200'
                  } relative inline-flex items-center h-6 rounded-full w-11`}> 
              {/* <span className="sr-only"></span> */}
              <span
                className={`${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
            {/* termina boton switch - ui */}             
            </div>

            <div className="float-right h-6 mr-1 mt-1 text-black font-semibold text-sm"> 
              <p>Available:</p>
            </div>

              <p className=" w-9/12 ml-2 text-truncate text-black text-xl">Hola soy tu patata bien frita</p>

            <div className="float-right h-6 mr-1"> 
              <p className="inline-block text-left ml-4 align-middle mx-auto"> </p>
            </div>
                
         </div>
        </div>
        

        {/* segunda card */}

        {/* <div className="flex  h-14 w-full mt-2  border-b-2 border-pink-700">
          <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0 "> 
            <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADfUlEQVRoge1ZzWtVRxT/zbyXl2hba2Ma00qs0YgvRlf9sJGSSslOYmnBj3ZVUIikRNyUUnARcGHwP+ii3RYLFpSCUBVSKCUfSKU1iUJINFXB2mdaE8n7uHN+LpJFpdfE3HMuuvDAgce9M7+Pe+bOm5kLPI9nK1waoP90fHQSwMcx+IRzp1ef/+FLa05zI4X2DxsdoqnF2tBL45r+czctebOWYABQW8jd+evF4rWMRFvi7keZzNW1lcIda95UhtYnX/+aL2ayY5585Lo4h5oQtXzXtfOqNad5RQDgt/qmos/GQ0sUFdPgTMUIAEjg0o0MI0UjEnvd+3T4UjHSOvrTqrEN78UOoZbrv6wyf0GQkpHOgeMNewZ8Tdw9QhpOA79bc6ZUaHeEJOISdD2pMFoDftvZ/L4T9C9K6qTjsx8nLlrymlaEgAPRx/nfj02RzAkaP8SMJdiG3ZsOgDi6dEuuu9xcO3ZmfHrEitvsqXy/tzU3M1scAdD8ZMycfEDfcuTceMmC32xozczOdZNsftxL/r8UNK0UOWzFb1KRb/ZseUnKlQkAdcvs+rfPVW08ePbajFaDSUVCqdQNsg4klpl1LJa7LDSojczPVK57+R7mU4DPLWYwNcCpD7a3R9nKzyoRrNr16fk/VBjqJUq+ur6nya1RYdyQwhcAnq6RXGCeLugw6LdqdaiN1LDqdTB+yf6kUQ2/WqtDbcQFqSZ0FSGp1qEGEGFEZUXEiQ4ABkbKUrpPqXpZheFL/2p1qI2UQnSTEhpVGIjUZ1wGRsojDKFNg1F2lStaHfqhhTDIEA5pMErZMKjVoTYSRC5KpJu1ZpxuZQAYrX6ntu0IOWYSrdtKLsgbVwbVGzyTU5ThlYVRktuS9HXOjVpoMDEylZsdAlwiIwCHLDSYGBH6Ww7Jjkjp/J8WGkyMEJwGExoRmbbQYHPSKFLNhPMG4XIWEoyOTFmbtKcndJuZhbAxQteS9CMCHfIWEtR79l7AC/FO0j07BW29BjrUAC+8u/ZtgPWLH5IumvUr2hre0upQGxHhvsTVWEgE2f/UjQDoNMDYrQVQrbX63nxlPXz2hlYEAEQI648N30v856iqiPO5zZr+/42Mcyos1fQrkLqEK5OY8K9qequMeMqkGH2Z8OSkpr9qH3Dh9tytjtdWlAm3GYAAKCbIuwD7vrpUOKXR8jyetXgIwwv0AqXYviEAAAAASUVORK5CYII="
            alt=""/>
          </div>
          <div className="float-left  align-baseline text-left inline-block h-4 w-full ">
            <div className=" inline-block w-full align-bottom">
              <p className="inline-block ml-2 text-black font-semibold text-sm">Bebida de cola (sin albur)</p>
              <button className=" align-bottom inline-block  font-semibold float-right mr-2 mb-1 text-sm bg-pink-500 w-10 rounded-xl">Edit</button>
              <p className=" font-semibold inline-block float-right mr-6 text-sm"> 10</p>
              <p className=" font-semiboldinline-block float-right text-left mr-1 text-sm "> $ </p>
            </div> 
              <hr className=" border-pink-500 border-1  mx-2" />
              <p className=" w-9/12  ml-2 text-truncate text-black text- text-xs mt-1">Hola soy tu bebida de cola (sin albur)</p>
            </div>
        </div> */}

        </Fragment>
    )
}

export default EditMenu
