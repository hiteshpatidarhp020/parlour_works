
import "./pw-slider.css"
import Form from 'react-bootstrap/Form';


const PwSlider = ({labelright,labelleft}) =>{
    return(
    <>
    
    <Form>
     <Form.Label>{labelright}</Form.Label>
      <Form.Check // prettier-ignore
        
        type="switch"
        id="custom-switch"
        label={labelleft}
        />
      {/* <Form.Check 
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      /> */}
      </Form>

        </>
    )
}
export default PwSlider;