import React from 'react'
import { Link } from "react-router-dom";

const Pagination = ({studentsPerpage , totalStudents , paginate}) => {

    const pageNumbers = []


    for(let i=1 ;i <= Math.ceil(totalStudents / studentsPerpage); i++){
        pageNumbers.push(i)
    }

   
    return (
        <div className="page-container">
           
            <nav>
          <h1>
                <ul className="pagination">
                  {
                      pageNumbers.map( number => (
                        <li  key={number} className="page-item">
                            <Link  onClick={()=>  paginate(number)} className="page-link" >  {number} </Link>
                        </li>
                      ) )      
                }
                </ul>
                </h1>
            </nav>
            
        </div>
    )
}   

export default Pagination