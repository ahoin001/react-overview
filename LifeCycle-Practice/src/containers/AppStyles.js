// ? Writing like this allows styled components to be made in an external file and used anywhere imported
import styled from 'styled-components'

export const AppContainer = styled.div` 
text-align: center;
`;

export const AppContainerButton = styled.button` 
/* Pass props to styled component for use in dynamic styling */
background-color: ${props => props.alternate ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid green;
padding: 10px;
cursor: pointer;

/* '&' is required to let SC know hover belongs to this component */
&:hover {
  background-color: ${props => props.alternate ? 'salmon' : 'lightgreen'};
  color: 'black'
}`;

export const blue = styled.p` 
color: blue;
`;

export const bold = styled.p` 
font-weight: bold;
`;