const Typography = () =>{
    return(
        <>

        </>
    )
};
export default Typography;

export const getTextColor = (theme)=>({
    primary100: css`
      color: ${theme.colors.primary100};
    `,
    primary200: css`
      color: ${theme.color.primary200};
    `,
    
    primarygrad100: css`
      color: ${theme.color.primarygrad100};
      `,
    primarygrad200: css`
      color: ${theme.color.primarygrad200};
      `,
    background100: css`
      color: ${theme.color.background100};
      `,
    status100: css`
      color: ${theme.color.status100};
      `,
    status200: css`
      color: ${theme.color.status200};
      `,
    status300: css`
      color: ${theme.color.status300};
      `,
    status400: css`
      color: ${theme.color.status400};
      `,
    tertiary100: css`
      color: ${theme.color.tertiary100};
      `,
    tertiary200: css`
      color: ${theme.color.tertiary200};
      `,
    alternative100: css`
      color: ${theme.color.alternative100};
      `,
    alternative200: css`
      color: ${theme.color.alternative200};
      `,
    alternative300: css`
      color: ${theme.color.alternative300};
      `,
    alternative400: css`
      color: ${theme.color.alternative400};
      `,
    alternative500: css`
      color: ${theme.color.alternative500};
      `,
    alternative600: css`
      color: ${theme.color.alternative600};
      `,
  
    white: css`
      color: ${theme.color.white};
      `,
    black: css`
      color: ${theme.color.black};
      `,
  });