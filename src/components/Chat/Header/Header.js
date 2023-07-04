// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
 
import React from "react";
import { HeaderWrapper, LogoBanner, WelcomeText } from "./Header.styled";
 
const defaultHeaderConfig = {
    headerText: 'How can we help?'
};

export const Header = ({ headerConfig, logoConfig }) => {
  const config = Object.assign(
    defaultHeaderConfig,
    headerConfig,
    logoConfig
  );
 
  return (
    <HeaderWrapper id="header">
      {!!config.sourceUrl && (
        <LogoBanner
          id="logo"
          src={config.sourceUrl}
          alt="Logo banner"
          data-testid="logo-banner"
        ></LogoBanner>
      )}
      <WelcomeText type={"h3"}>
        {config.headerText}
      </WelcomeText>
    </HeaderWrapper>
  )
}
 
Header.defaultProps = {
  headerConfig: {}
};
 
export default Header;
