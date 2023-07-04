/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ThemeProvider, defaultTheme } from "../src/theme";

export const decorators = [
    Story => (
        <ThemeProvider theme={{
          ...defaultTheme,
          // chatTranscriptor: {
          //   background: "rgba(242, 242, 242, 0.49)",
          //   outgoingMsgBg: "#AADFB4",
          //   incomingMsgBg: "#EDEDED",
          //   outgoingMsg: {
          //     background: "#AADFB4"
          //   },
          //   incomingMsg: {
          //     background: "#EDEDED"
          //   }
          // },
          fonts: {
            override: "Comic Sans MS"
          },
          header: {
            // background: "#319"
          }
        }}>
            <Story />
        </ThemeProvider>
    ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
