/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./manage-category.css";
import { Col, Image, Row } from "react-bootstrap";
import PwText from "../../pw-text";
import PwSpace from "../../pw-space";


const ManageCategory = ({labelHead,labelDiscript,marginBottom,marginRight}) =>{
    const Servicecart = {
        label:labelHead,
        label:labelDiscript,
    };
    const Servicebox = {
        marginBottom:marginBottom,
        marginRight:marginRight,
    };
    return(
        <>
         <div style={{ width: '100%' }} css={Servicebox} className="maincard">
        <Row className="cardcolo">
            <Col>
            <Image src="../images/dashboard/hairspa.png" />
        
            <div  className="cardcolt">
            <PwText css={Servicecart} text={labelHead} appearance="body_s_medium"/>
            
            <PwSpace value="2px"/>
            <PwText className="headertextt" css={Servicecart} text={labelDiscript} appearance="body_m_regular"/>
             </div>
             </Col>
             <Col  xs={4} md={3} className="cardic">
                <Image src="../images/dashboard/icservice.svg"/>
             </Col>
        </Row>
        </div>
      
        </>
    )
};
export default ManageCategory;