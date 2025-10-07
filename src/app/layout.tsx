import { ReactNode } from "react";
import { defaultTheme } from './styles/themes/defaultTheme';

import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}