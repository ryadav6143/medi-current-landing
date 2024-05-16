import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";

function FAQ() {
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };
  const sections = [
    {
      summary: "Are admission open at Medicaps University for 2024?",
      detail:
        "Yes, the admission process has started at Medicaps University. MU has a fully online application to the admission process. One can also visit the University campus on any working day from 8:30 am to 5 pm to complete the admission process. Visit the link https://admission.medicaps.ac.in/ or call 07969024450 for detailed information and admission process at Medicaps University.",
    },
    {
      summary: "How can I complete the admission process?",
      detail:
        "Admission process is fully online. One can also visit the University campus on any working day from 8:30 am to 5 pm to complete the admission process. Visit https://admission.medicaps.ac.in/ to initiate your online admission process.",
    },
    {
      summary: "What are the important dates regarding the admission?",
      detail:
        "The admission in various programmes of session 2024 has started from January 2024. Visit www.medicaps.ac.in/07969024444 for more details.",
    },
    {
      summary:
        "Is it compulsory to fill all details of the online application or admission form?",
      detail:
        "It is recommended that you fill the mandatory fields marked as (*) to submit your admission form.",
    },
    {
      summary:
        "I made mistakes in my application. How will I be able to correct them?",
      detail:
        "You need to raise a query from the application form source or can contact the concerned person reached during the admission process.",
    },
    {
      summary:
        "What if I decide to withdraw admission later? What are the refund rules?",
      detail:
        "You will have to visit the admission cell for the cancellation/refund process with the documents (All the original receipts and bank account details). Refund rules are as per UGC norms.",
    },
    {
      summary: "When can I visit the campus?",
      detail:
        "You can visit the University from Monday to Saturday between 9:00 am to 4:30 pm.",
    },
    {
      summary: "How can I get regular updates about the university?",
      detail:
        "Visit www.medicaps.ac.in for all the latest developments and updates. You can also follow us on various social media platforms such as WhatsApp, Instagram, Facebook, Twitter, LinkedIn and YouTube.",
    },
    {
      summary:
        "I am an International applicant, willing to pursue my Graduation from MU, what is the minimum eligibility criterion?",
      detail:
        "The eligibility criterion for International applicants differs for different programmes. Details regarding the eligibility of the programme you are interested in can be verified from the Admission cell.",
    },
    {
      summary: "Is Bus and Hostel facility available?",
      detail:
        "Yes, we do have both the facilities.For further details visit the campus.",
    },
  ];

  return (
    <>
      <div className="faq-section">
        <div className="illustrations">
          <p>FAQ's</p>
        </div>
        <div className="circle">
          <div></div>
        </div>

        <div className="faq-body">
          <Accordion activeKey={activeKey} onSelect={handleAccordionToggle}>
            {sections.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{item.summary}</Accordion.Header>
                <Accordion.Body>
                  <p>{item.detail} </p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FAQ;
