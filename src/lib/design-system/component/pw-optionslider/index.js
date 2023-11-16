/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./pw-optionslider.css"

const PwOptionSlider = ({labelFirst,labelSecond,width}) =>{
    const Optionslider = {
            label:labelFirst,
            label:labelSecond,
            width:width,
    };
    return(
        <>
        <div class="container">
  <div class="switches-container">
    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
    <label css={Optionslider} for="switchMonthly">{labelFirst}</label>
    <label css={Optionslider} for="switchYearly">{labelSecond}</label>
    <div class="switch-wrapper">
      <div class="switch">
        <div css={Optionslider}>{labelFirst}</div>
        <div css={Optionslider}>{labelSecond}</div>
      </div>
    </div>
  </div>
  <p><small>NB: Input radios are used toggle the switch state.</small></p>
</div>
        </>
    )
};
export default PwOptionSlider;
