import PwDivider from "../pw-divider";
import PwGreenflag from "../pw-greenflag";
import PwKBLogo from "../pw-kblogo";
import Servicecard from "../common/servicecard";
import ManageCategory from "../common/manage-category";
import PwImage from "../pw-image";
import IcPlus from "../../icons/IcPlus";
import IcService from "../../icons/IcService";
import PwCheckbox from "../pw-checkbox";

const MPractice = () =>{
    const services = [
        { id: 1, name: "Haircut", gender: "M", price: "200" },
        { id: 2, name: "maincure", gender: "M", price: "200" },
        { id: 2, name: "Manicure", gender: "F", price: "450" },
        // { id: 3, name: "Shave", gender: "Male", price: "$10" },
      ];
    return(
        <>
        {/* <Radio labels={["Option 1", "Option 2", "Option 3"]} /> */}
        
        {/* <PwDivider marginTop="30px" marginBottom="30px"/> */}
        {/* <PwKBLogo  /> */}
        {/* <PwGreenflag OffersText="Tranding" background="green" width="70px"/> */}
        {/* <ManageCategory labelHead="HairSpa" labelDiscript="Best salon in area" marginBottom="30px" marginRight="20px"/> */}
        <Servicecard services={services} labelHeading="Hair Spa" 
        labelDiscription="Best Salon In The Area"/>
    
        {/* <Servicecard marginRight="20px" marginBottom="20px"labelOne="Hair Spa" labelTwo="Best salon in town" labelCTwoOne="Hair cut" labelCTwoTwo="Blow Dry" labelCTwoThree="Hair Spa" labelCTwoFour="Hair Dry" 
        labelRightOne="F" labelRightTwo="F" labelRightThree="F" labelRightFour="M" labelRTOne="200" labelRTTwo="200" labelRTThree="300" labelRTFour="400"/> */}
        {/* <PwImage 
        src="/images/dashboard/hairspa.png"
        width="20%"
        height="20%"/> */}
        <PwCheckbox labelcheck="Price is inclusive of GST"/>
        </>
    )
};
export default MPractice;