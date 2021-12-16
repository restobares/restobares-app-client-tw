<div className="flex  mr-2  h-40 float-right  bg-pink-400 text-white rounded-br-3xl  ">   
      <div className="float-left h-40 w-40">
        <img className="object-cover min-w-full min-h-full"
          src="https://informaciongastronomica.com/wp-content/uploads/2019/01/empanada2.jpg"
          alt="asd"
          />
      </div>
      <div className="bg-pink-500 h-40 w-80 float-right">
        <div className="bg-pink-600 h-8">
        <p className="float-left ml-1  text-2xl "> {product_name} </p>
        </div>
        {/* <div className="overflow float-right bg-pink-800 w-22 h-8 rounded-bl-xl ">
        <p className="inline-block text-left text-xl mt-1 ml-2"> ${price}</p> 
        <p className="inline-block text-sm ml-2 mr-1"> C/U</p>
        </div> */}
        <div className="h-24 mt-1 mx-1 text-xl mb-1">
        <p className="float-left "> {details} </p>
        </div>
      <div className="">
        <div className="float-left w-full bg-pink-600 text-md h-5  ">
        <h1 className="inline-block text-left "> Cantidad:   </h1><h1 className=" inline-block ml-4 "> {cart[product_id] ? cart[product_id].quantity : 0}</h1><h1 className=" inline-block ml-4 pr-2 "> $ {cart[product_id] ? cart[product_id].quantity*price : '---'} </h1>
        </div>
      </div>
      </div>
      <div className="bg-pink-700 w-16 float-right rounded-br-3xl px-1 ">
        <button className="mt-12 text-center text-xl" onClick={add}>
          ➕
        </button>
        <div className=" flex item-center">
        <button className="mt-6 mx-auto" disabled={!cart[product_id] || !cart[product_id].quantity} onClick={minus}>
          ➖</button>
        </div>
      </div>
    </div>