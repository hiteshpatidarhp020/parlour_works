// import "./pw-checkbox.css"

const PwCheckbox=({checkboxes})=> {
  if (!checkboxes || !Array.isArray(checkboxes)) {
    return;
} 
  return (
    <> 
    <div>
     {checkboxes.map((checkbox) => (
        <div  key={checkboxes.checkbox}>
    <label class="container">{checkbox.value1}
    <input type="checkbox"/>
    <span class="checkmarkone"></span>
    </label>

    <label class="container">{checkbox.value2}
    <input type="checkbox"/>
    <span class="checkmarkone"></span>
    </label>
</div>
      ))}
      </div>

    </>
  );
}

export default PwCheckbox;

