import "./Aboutus.css";
// react hooks
import { useState } from "react";
// Questions Array
import { questions } from "../../data/questions";

const Aboutus = () => {
  const [open, setOpen] = useState(null)
  const questionOpen = (q) => {
     if(open === q){
     return setOpen(null)
     }
     setOpen(q)
  }

  return (
    <div className="aboutus--container">
      <div className="aboutus--bio">
        <h1>Our Ehics</h1>
        <p>
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.ur vel bibendum lorem. Morbi convallis convallis diam
          sit amet lacinia. Aliquam in elementum tellus.ante pulvinar. Donec ut
          rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
          bibendum lorem. Morbi convallis convallis diam sit amet lacinia.{" "}
        </p>
      </div>
      <div className="aboutus--faq">
        <h1>FAQ</h1>
        {questions.map((item,q) => {
          return (
            <div className="faq--questions">
              <div className="question--title">
                <p>{item.question}</p>
               <div onClick={() => {questionOpen(q)}}> {open === q ? <img src="/icons/minus.svg" alt=""/> : <img src="/icons/plus.svg" alt=""/>} </div>
              </div>
              <div className={open === q ? 'question--answer show' : 'question--answer' }>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
        <div className="more--faqs"><p>More FAQs</p><img src="/icons/proceed.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default Aboutus;
