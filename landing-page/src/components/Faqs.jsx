import Accordion from "react-bootstrap/Accordion";

function Faqs() {
  const faqs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  ];
  return (
    <div style={{width: "80%", margin: "25px auto", backgroundColor: "black"}}>
      <h1 style={{paddingBottom: "25px"}}>FAQS</h1>
      <Accordion defaultActiveKey="0">
        {faqs.map((item, index) => (
          <Accordion.Item eventKey={index} key={index} >
            <Accordion.Header id="custome-accordion">Accordion Item {index + 1}</Accordion.Header>
            <Accordion.Body>{item}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Faqs;
