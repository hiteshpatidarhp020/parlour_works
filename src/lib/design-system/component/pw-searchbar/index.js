import "./pw-search.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Col';
import PwIcon from "../pw-icon";
import IcSearchicon from "../../icons/IcSearch";
import InputGroup from 'react-bootstrap/InputGroup';
import PwText from "../pw-text";

const PwSearchBar = () =>{
    return(
        <>
        {/* <Form>
            <Col xs="auto">
                <InputGroup>
                <PwIcon ic={<IcSearchicon/>}/>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            </InputGroup>
          </Col> 
          </Form> */}
          {/* <Container className="">
          <PwIcon ic={<IcSearchicon/>}/>
          <PwText text="search..."/>
          </Container> */}
    <div class="d-flex searchmain">
      <div class="searchbox">        
      <PwIcon className="searchicon" ic={<IcSearchicon/>}/>
      <PwText className="searchinput" text="Search stores"/>
  </div>
</div>
        </>
    )
};
export default PwSearchBar;