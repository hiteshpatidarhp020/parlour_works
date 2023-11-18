import "./pw-checkbox.css"
const PwCheckbox=({labelcheck})=> {
  return (
    <>  
    {/* <h1>Custom Checkboxes</h1> */}
    <label class="container">{labelcheck}
  <input type="checkbox" checked="checked"/>
 
  <span class="checkmark"></span>
</label>


    </>
  );
}

export default PwCheckbox;