import "./pw-optionslider.css";

const PwOptionSlider = () =>{
    return(
        <>
            <div class="container">
  <div class="switches-container">
    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
    <input type="radio" id="switchDays" name="switchPlan" value="Days" />
    <label for="switchMonthly">Monthly</label>
    <label for="switchYearly">Yearly</label>
    <label for="switchDays">Days</label>
    <div class="switch-wrapper">
      <div class="switch">
        <div>Monthly</div>
        <div>Yearly</div>
        <div>Days</div>
      </div>
    </div>
  </div>
  <p><small>NB: Input radios are used toggle the switch state.</small></p>
</div>
        </>
    )
};
export default PwOptionSlider;