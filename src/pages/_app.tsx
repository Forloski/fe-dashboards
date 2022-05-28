import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import {
  CacheProvider as EmotionCacheProvider,
  css,
  EmotionCache,
} from "@emotion/react";
import { createThemeCache } from "../theme";
import { ToggleThemeProvider } from "../theme/hooks/toggleTheme.context";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material";

const clientSideEmotionCache = createThemeCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { resolvedTheme, setTheme, theme } = useTheme();

  return (
    <NextThemeProvider>
      <EmotionCacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ToggleThemeProvider>
          <CssBaseline />
          <GlobalStyles
            styles={css`
              :root {
                body {
                  background-color: #fafafa;
                  color: #121212;
                }
              }
              [data-theme="dark"] {
                body {
                  background-color: #121212;
                  color: #fafafa;
                }
              }
            `}
          />
          <Component {...pageProps} />
        </ToggleThemeProvider>
      </EmotionCacheProvider>
    </NextThemeProvider>
  );
}
