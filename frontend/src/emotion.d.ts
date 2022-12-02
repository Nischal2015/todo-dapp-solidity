import "@emotion/react";
import { theme } from "~/context";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
      lightgray: string;
      white: string;
      disabled: string;
    };
  }
}
