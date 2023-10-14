import Form from 'react-bootstrap/Form';
import "../pw-radio/pw-radio.css";
const Radio= ({label})=>{
    return(
        <>
         <Form className='radiomain'>
      {['radio'].map((type) => (
        <div key={`default-${type}`} name="radioinputbutton" className="mb-3 radioinput">
          <Form.Check
            className='radiotext' // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={label}
          />
        </div>
      ))}
    </Form>
        </>
    )
};
export default Radio;