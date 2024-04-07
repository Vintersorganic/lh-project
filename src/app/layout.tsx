import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Topbar from "../components/Topbar";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Legit.Health",
  description: "App for Legit.Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* Global css reset*/}
            <CssBaseline />
            <ReactQueryProvider>
              <Topbar />
              <Container
                sx={{
                  minHeight: `calc(100vh - ${64}px)`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <main className="main-container">{children}</main>
              </Container>
            </ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
