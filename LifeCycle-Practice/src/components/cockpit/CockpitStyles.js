// ? Writing like this allows styled components to be made in an external file and used anywhere imported
import styled,{css} from 'styled-components'

export const AppContainer = styled.div` 
text-align: center;
`;

// ? Conditionally render a set of CSS properties  
export const ListSubtitle = styled.p` 
${props => props.listLength <= 1 ? css`color: blue; font-weight: bold;` : props.listLength <= 2 ? css`color:blue;` : ''};
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