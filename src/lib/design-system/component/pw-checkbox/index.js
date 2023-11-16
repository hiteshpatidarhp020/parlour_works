import Form from 'react-bootstrap/Form';
import PwText from '../pw-text';

const PwCheckbox=({labelcheck})=> {
  return (
    <>
    {/* <Form>
      <Form.Check
        type="checkbox"
        label={labelcheck}
      />
    </Form> */}
    {/* <div class="form-check">
    <input class="form-check-input" type="checkbox"checked/>
     <label class="form-check-label" for="flexCheckChecked">
     {labelcheck}
    </label>
    </div> */}
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
    {/* <div className='checkboxdiv'>
    <input type='checkbox'/>
    <PwText className="text" text={labelcheck}/>
    </div> */}
    </>
  );
}

export default PwCheckbox;