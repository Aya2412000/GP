import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
    <div className="parent">
       <div className="Header">
         <div className="content">
           <span className="title" id="title1">حرفيين</span><br/>
           <span className="title"id="title2">متخصصين</span>
           <h4 className="title"id="title3"> علي أعلي مستوي </h4>
         {/* Button in styled */}
         <div className="button">
           <Link to="/login">
             <button className="btn-In" id="btn-In">تسجيل الدخول</button>
           </Link>
           <Link to="/signup">
             <button className="btn-Up"id="btn-Up">إنشاء حساب</button>
           </Link>
        </div>
       </div>
     </div>
     </div>
    </div>
  )
}
