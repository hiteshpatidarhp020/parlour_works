import { Col, Image, Row } from "react-bootstrap";
import "./servicecard.css"
import PwText from "../../pw-text";
import PwDivider from "../../pw-divider";
import PwSpace from "../../pw-space";

const Servicecard = ({services,labelHeading,labelDiscription}) =>{
    if (!services || !Array.isArray(services)) {
        return;
    } 

    const Servicecart = {
        label:labelHeading,
        label:labelDiscription,
    };
    return(
        <>
        <div style={{ width: '100%' }} className="cardouterrow">
        
        <Row className="cardcolone">
            <Col>
            <Image src="../images/dashboard/hairspa.png" />
            <div  className="cardcoltwo">
            <PwText  text={labelHeading} appearance="body_s_medium"/>
            <PwSpace value="2px"/>
            <PwText className="headertext"  text={labelDiscription} appearance="body_m_regular"/>
             </div>
             </Col>
        </Row>
        <PwDivider className="divider" marginTop="20px" marginBottom="15px" />
        {services.map((service) => (
        <div style={{ color: "white" }} key={service.text}>
        <Row>
            <Col xs={8} md={8} className="colcontentleft">
                <PwText  text={service.name} appearance="body_s_regul" />
                <PwSpace value="15px"/>
                <PwSpace value="15px"/>
            </Col>
            <Col xs={4} md={4} className="colcontentright">
                    <Col xs={2} md={2} className="">
                    <PwText  text={service.gender} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                  
                    </Col>
                    
                    <Col xs={2} md={2} className="">
                    <div >
                    <PwText  text={service.price} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                   </div>
                    </Col>
                </Col>
            </Row>
            </div>
        ))}
      </div>
        </>
        )};
export default Servicecard;

