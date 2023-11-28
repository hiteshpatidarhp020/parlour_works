import PwDivider from "../pw-divider";
import PwGreenflag from "../pw-greenflag";
import PwKBLogo from "../pw-kblogo";
import Servicecard from "../common/servicecard";
import ManageCategory from "../common/manage-category";
import PwImage from "../pw-image";
import IcPlus from "../../icons/IcPlus";
import IcService from "../../icons/IcService";
import PwCheckbox from "../pw-checkbox";
import styled from "./mpractice.module.css";
// import Radio from "../pw-radio";

const MPractice = () =>{
    const services = [
        { id: 1, name: "Haircut", gender: "M", price: "200" },
        { id: 2, name: "maincure", gender: "M", price: "200" },
        // { id: 3, name: "Manicure", gender: "F", price: "450" },
        // { id: 4, name: "Shave", gender: "M", price: "200" },
      ];

      const labels = [
        { id: 1, name1: "Haircut"},
        { id: 2, name1: "Haircut"},
        { id: 3, name1: "Haircut"},
        { id: 4, name1: "Haircut"},
      ];

      const checkboxes = [
        { id: 1, value1: "Price is inclusive of GST"},
        { id: 2, value2: "Price"},
      ];

    return(
        <>
        {/* <Radio labels={labels} /> */}

        {/* <PwDivider
         marginTop="30px" 
         marginBottom="30px"/> */}

        {/* <PwKBLogo  /> */}

        {/* <PwGreenflag 
        OffersText="Tranding" 
        background="green" 
        width="70px"/> */}

        {/* <ManageCategory 
        labelHead="HairSpa" 
        labelDiscript="Best salon in area" marginBottom="30px" marginRight="20px"/> */}

        {/* <Servicecard 
        services={services} 
        labelHeading="Hair Spa" 
        labelDiscription="Best Salon In The Area"/> */}
    
        {/* <PwImage 
        src="/images/dashboard/hairspa.png"
        width="20%"
        height="20%"/> */}


         <PwCheckbox 
        checkboxes={checkboxes}/>


        </> 
    )
};
export default MPractice;