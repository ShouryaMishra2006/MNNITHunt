import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${openItem === 1 ? "" : "collapsed"}`}
            type="button"
            onClick={() => handleToggle(1)}
            aria-expanded={openItem === 1}
            aria-controls="flush-collapseOne"
          >
            #1 How can I report inappropriate behavior or content?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${
            openItem === 1 ? "show" : ""
          }`}
          aria-labelledby="flush-headingOne"
        >
          <div className="accordion-body">
            Contact Shourya Mishra 2nd Year CSE
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className={`accordion-button ${openItem === 2 ? "" : "collapsed"}`}
            type="button"
            onClick={() => handleToggle(2)}
            aria-expanded={openItem === 2}
            aria-controls="flush-collapseTwo"
          >
            #2 Is there a way to contact customer support directly?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className={`accordion-collapse collapse ${
            openItem === 2 ? "show" : ""
          }`}
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Contact Vatsal Kumar 2nd Year CHE
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className={`accordion-button ${openItem === 3 ? "" : "collapsed"}`}
            type="button"
            onClick={() => handleToggle(3)}
            aria-expanded={openItem === 3}
            aria-controls="flush-collapseThree"
          >
            #3 How can I suggest new features or any other improvements?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className={`accordion-collapse collapse ${
            openItem === 3 ? "show" : ""
          }`}
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Contact Manpreet Kaur 2nd Year CSE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
