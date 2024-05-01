import React, { useState } from "react";
import img from "../img/logo1.jpg"
import Nameinfo from "./name";
import NumberInfo from "./number";
import EmailInfo from "./email";
import Ageinfo from "./age";
import Looklike from "./looklike";
import Goal from "./goal";
import Hairfall from "./hairfall";
import NotFoundPage from "./genetic";
import "./form.css"
import Haircal from "./haircal";
function FormPage1() {
        const [page, setPage] = useState(0);
        const [formData, setFormData] = useState({
      
        });
      
        const FormTitles = [
          "What is face your Shape",
          "Temple Correction",
          "Hair loss",
          "Enter Your Name",
          "Enter Your Age",
          "Enter Your Number",
          "Email",
          "Graft Calculator"
          
        ];
      
        const PageDisplay = () => {
          switch (page) {
            case 0:
                return <Goal />;
            case 1:
              return <Hairfall formData={formData} setFormData={setFormData} />;
            case 2:
              return <Looklike formData={formData} setFormData={setFormData} />;
              case 3:
               return <Nameinfo formData={formData} setFormData={setFormData}/>
            case 4:
              return <Ageinfo formData={formData} setFormData={setFormData} />;
            case 5:
              return <NumberInfo formData={formData} setFormData={setFormData}/>
            case 6:
                return <EmailInfo formData={formData} setFormData={setFormData}/>
            case 7:
              return <Haircal/>;
              
            default:
              return <NotFoundPage />;
          }
        };
      
  return (
    <>

<div id="background" >
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <img src={img} width={130}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
</nav>

{/* ---------- */}
<div className="form container">
  <div className="progressbar w-75">
    <div 
      style={{ width: `${Math.round((page + 1) * (100 / FormTitles.length))}%` }}
    >
      <br></br>
      {Math.round((page + 1) * (100 / FormTitles.length))}%
    </div>
  </div>
  <div className="form-container shadow-none">
    <div className="header">
      <h1>{FormTitles[page]}</h1>
    </div>
    <div className="body">{PageDisplay()}</div>
    <div className="footer">
      <button
        disabled={page === 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
            console.log(formData);
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}
      >
        {page === FormTitles.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default FormPage1
