import React from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";

export default function ChangeOrder(detailTable) {
    const {idResto} = useParams()
    const table = detailTable.detailTable
    console.log("detail table =>",table)
    return ( 
        <div className=" h-8 mx-2 bg-gray-700 bg-opacity-10 rounded-md mb-2 flex justify-between items-center">
            <p className="inline-block float-left ml-2 ">Change Order</p>
            <Link to={`../../resto/${idResto}/table/${table}/menu`}>
            <button className="w-12  ml-2 mr-2 h-6 bg-pink-700 rounded-md text-white">Go!</button>
            </Link>
        </div>
  );
}
