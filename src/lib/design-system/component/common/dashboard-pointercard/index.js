import { Col, Row } from "react-bootstrap";
import "./pointercard.css";
import PwText from "../../pw-text";
import PwIcon from "../../pw-icon";
import IcService from "../../../icons/IcService";
import IcDashCardOne from "../../../icons/IcDashCardone";
const PwDashboardPoniterCard = ({labelOne,labelTwo,colorcard}) =>{
    const Dashcart = {
        label:labelOne,
        label:labelTwo,
    };
    return(
        <>
        <div style={{ width: '100%' }}>
            <Row className="maincontainer">
                <Col xs={10} md={10}>
                    <PwText color="#E5E8F2" css={Dashcart} className="textone" text={labelOne}appearance="body_s_regul"/>
                    <PwText color="white"  css={Dashcart}  className="textnext" text={labelTwo} 
                    appearance="heading_l_medium"/>
                </Col>
                <Col xs={2} md={2}>
                    <PwIcon className="iconmain" ic={<IcDashCardOne/>}/>
                </Col>
            </Row>
            </div>
        </>
    )
}
export default PwDashboardPoniterCard;