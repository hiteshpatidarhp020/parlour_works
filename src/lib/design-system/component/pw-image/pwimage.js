/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const PwImage = ({src,
    width,
    height,
    borderRadius,})=>{
        const imageStyles = css`
        width: ${width};
        height: ${height};
        border-radius: ${borderRadius};`
    return(
        <img css={imageStyles} src={src} width={width} height={height} boardeRadius={borderRadius}/>
    )        
};
PwImage.defaultProps = {
    src: undefined,
    width: "100%",
    height: "100%",
    borderRadius:undefined,
}