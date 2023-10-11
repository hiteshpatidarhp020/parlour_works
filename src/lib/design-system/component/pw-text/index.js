
import styled, {css} from "styled-components";
const theme = {
  fontSizes: {
    heading_l: "30px",
    heading_m: "27px",
    heading_s: "22px",
    heading_l_medium:"25px",
    heading_m_medium:"24px",
    heading_s_medium:"20px",
    body_l:"18px",
    body_m:"17px",
    body_s:"16px",
    body_l_medium:"15px",
    body_m_medium:"14px",
    body_s_medium:"13px",
    body_m_bold:"12px",
    body_s_bold:"10px",
  },
  fontWeights: {
    heading:"700",
    medium: "500",
    regular: "400",
  },
};

const textStyles = {
  body_l_heading: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_l_medium || "15px"};
    font-weight: ${theme?.fontWeights?.heading || "700"};
  `,
  body_m_heading: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_m_medium || "14px"};
    font-weight: ${theme?.fontWeights?.heading || "700"};
`,
  heading_l_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_l || "30px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  heading_m_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_m || "27px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  heading_s_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_s || "22px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  heading_s_medium: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.heading_s_medium || "20px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,
body_l_medium: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_l || "18px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,
body_m: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_m || "17px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,
body_s_medium: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_s || "16px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,
body_m_medi: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_m_medium || "14px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,
body_m_medium: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_m_bold || "12px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,
body_s_medium: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_s_bold || "10px"};
  font-weight: ${theme?.fontWeights?.medium || "500"};
`,

heading_l_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_l_medium || "25px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  heading_m_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_m_medium || "24px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
heading_s_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_s || "22px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  heading_s_regular: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.heading_s_medium || "20px"};
  font-weight: ${theme?.fontWeights?.regular || "400"};
`,
body_l_regular: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_l || "18px"};
  font-weight: ${theme?.fontWeights?.regular || "400"};
`,
body_s_regular: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_s || "16px"};
  font-weight: ${theme?.fontWeights?.regular || "400"};
`,
body_m_regular: css`
font-family: "DM Sans";
font-size: ${theme?.fontSizes?.body_m_medium || "14px"};
font-weight: ${theme?.fontWeights?.regular || "400"};
`,
body_s_regul: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_s_medium || "13px"};
  font-weight: ${theme?.fontWeights?.regular || "400"};
`,
body_m_r: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_m_bold || "12px"};
  font-weight: ${theme?.fontWeights?.regular || "400"};
`,
body_s_reg: css`
  font-family: "DM Sans";
  font-size: ${theme?.fontSizes?.body_s_bold || "10px"};
  font-weight: ${theme?.fontWeights?.regular || "400"};
`,
};

const StyledText = styled.div`
  ${(props) => textStyles[props.appearance]};
  color: ${(props) => props.color || "inherit"};
  width: ${(props) => props.width || "100%"};
  line-height: ${(props) => props.lineHeight || "28px"};
`;

const PwText = ({ text, lineHeight, width, appearance, color, className }) => {
  return (
    <StyledText
      className={className}
      lineHeight={lineHeight}
      width={width}
      color={color}
      appearance={appearance}
    >
      {text}
    </StyledText>
  );
};

export default PwText;


