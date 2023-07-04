import styled from "styled-components";
import { Text } from "../../core";

export const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.header.background || '#3F5773' };
  text-align: center;
  color: ${({ theme }) => theme.header.color || 'white'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const WelcomeText = styled(Text)`
  color: var(--ac-widget-header-textcolor, var(--ac-widget-global-textcolor));
`;
 
const DEFAULT_LOGO_MAX_HEIGHT = "52.4%";
const DEFAULT_LOGO_MAX_WIDTH = "100%";
 
export const LogoBanner = styled.img`
  max-height: var(--ac-widget-logo-max-height, ${DEFAULT_LOGO_MAX_HEIGHT});
  max-width: var(--ac-widget-logo-max-width, ${DEFAULT_LOGO_MAX_WIDTH});
`;