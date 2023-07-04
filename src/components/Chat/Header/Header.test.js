import React from 'react';
import Header from './Header';
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ThemeProvider } from '../../../theme';

describe('<Header />', () => {
  const renderComponent = (customProps = {}) => {
    render(
      <ThemeProvider>
        <Header {...customProps} />
      </ThemeProvider>
    );
  }
 
  test('renders without throwing an error', () => {
    renderComponent();
    expect(screen.getByText('How can we help?')).toBeInTheDocument();
  });
 
  test('logo banner should render when logoConfig.sourceUrl is defined', () => {
    const mockProps = {
      logoConfig: {
        sourceUrl: "https://mikeliao-cpp-test.s3.us-west-2.amazonaws.com/image-removebg-preview(1).png",
      }
    }
    renderComponent(mockProps);
 
    const logoBannerElem = screen.getByTestId('logo-banner');
    expect(logoBannerElem).toBeDefined();
    expect(logoBannerElem).toHaveAttribute('alt', "Logo banner");
  });
 
  test('logo banner should not render when logoConfig.sourceUrl is not defined', () => {
    renderComponent();
    expect(screen.queryByTestId('logo-banner')).toBeNull();
  });
});