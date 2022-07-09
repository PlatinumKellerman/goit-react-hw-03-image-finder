import { StyledContainer } from './AppContainer.styled';

export function AppContainer(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
