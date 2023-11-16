import { Col, Image, Row } from "react-bootstrap";
import "./servicecard.css"
import PwText from "../../pw-text";
import PwDivider from "../../pw-divider";
import PwSpace from "../../pw-space";

const Servicecard = ({marginRight,marginBottom,labelOne,labelTwo,labelCTwoOne,labelCTwoTwo,labelCTwoThree,labelCTwoFour,labelRightOne,labelRightTwo,labelRightThree,labelRightFour,labelRTOne,labelRTTwo,labelRTThree,labelRTFour}) =>{
    const ServCard = {
        label:labelOne,
        label:labelTwo,
    };
    const ServeCardTwo = {
        label:labelCTwoOne,
        label:labelCTwoTwo,
        label:labelCTwoThree,
        label:labelCTwoFour,
    }
    const Cardright={
        label:labelRightOne,
        label:labelRightTwo,
        label:labelRightThree,
        label:labelRightFour,
    }
    const CardRightTwo={
        label:labelRTOne,
        label:labelRTTwo,
        label:labelRTThree,
        label:labelRTFour,
    }
    const Cardmain = {
        marginRight:marginRight,
        marginBottom:marginBottom,
    }
    return(
        <>
        <div style={{ width: '40%' }} className="cardouterrow">
        <Row className="cardcolone">
            <Col>
            <Image src="../images/dashboard/hairspa.png" />
            </Col>
            <Col  className="cardcoltwo">
            <PwText css={ServCard} text={labelOne} appearance="body_s_medium"/>
            <PwText className="headertext" css={ServCard} text={labelTwo} appearance="body_m_regular"/>
             </Col>
        </Row>
        <PwDivider marginTop="5px" marginBottom="10px" />
        <Row>
            <Col xs={6} md={4} className="colcontentleft">
                <PwText css={ServeCardTwo} text={labelCTwoOne} appearance="body_s_regul" />
                <PwSpace value="15px"/>
                <PwText css={ServeCardTwo} text={labelCTwoTwo} appearance="body_s_regul" />
                <PwSpace value="15px"/>
                <PwText css={ServeCardTwo} text={labelCTwoThree} appearance="body_s_regul"/>
                <PwSpace value="15px"/>
                <PwText css={ServeCardTwo} text={labelCTwoFour} appearance="body_s_regul"/>
            </Col>
            <div className="colcontentright">
                    <Col xs={6} md={4} className="rightcol31">
                    <PwText css={Cardright} text={labelRightOne} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                    <PwText css={Cardright} text={labelRightTwo} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                    <PwText css={Cardright} text={labelRightThree} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                    <PwText css={Cardright} text={labelRightFour} appearance="body_s_regul"/>
                    </Col>
                    <Col xs={6} md={4} className="rightcol32">
                    <PwText css={CardRightTwo} text={labelRTOne} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                    <PwText css={CardRightTwo} text={labelRTTwo} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                    <PwText css={CardRightTwo} text={labelRTThree} appearance="body_s_regul"/>
                    <PwSpace value="15px"/>
                    <PwText css={CardRightTwo} text={labelRTFour} appearance="body_s_regul"/>
                    </Col>
                </div>
            </Row>
            </div>
        </>
    )
};
export default Servicecard; 
