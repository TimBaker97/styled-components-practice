import styled from 'styled-components';

// The bg prop was passed down from the Header in the StyledHeader part
export const StyledHeader = styled.header`
  /* background-color: ${({ bg }) => bg}; // Prop verison */
  background-color: ${({ theme }) =>
    theme.color.header}; // The theme styles version
  padding: 40px 0;
`;
