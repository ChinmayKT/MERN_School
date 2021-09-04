import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Students from './Students'
import Pagination from './Pagination'


const Home = () => {
  const [loading , setLoading] = useState(false)
  const [student, setStudent] = useState([]);
  const [token, setToken] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerpage] = useState(5)


  const getStudents = async (token) => {
    const res = await axios.get("/api/students", {
      headers: { Authorization: token },
    });
   
    setStudent(res.data); 
  };

 
useEffect(() => {
  const token = localStorage.getItem("tokenStore");
  setToken(token);
  if (token) {
    getStudents(token);
  }
}, []);

const getCurrentStudents = () => {
    const indexoflaststudent = currentPage * studentsPerpage 
    const indexoffirststudent = indexoflaststudent - studentsPerpage 
    const currentStudents = student.slice(indexoffirststudent , indexoflaststudent)
 
    return currentStudents
}
  
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
        <Students stu = {getCurrentStudents()} loading={loading} />

        <Pagination className="page"
           studentsPerpage={studentsPerpage} 
           totalStudents={student.length}
           paginate = {paginate}
        />
    

      
    </div>
  );
};

export default Home;
