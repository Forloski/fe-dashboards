import Head from "next/head";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider as EmotionCacheProvider, css, EmotionCache } from "@emotion/react";
import { createThemeCache } from "../theme";
import { ToggleThemeProvider } from "../theme/contexts/toggleTheme.context";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { GlobalStyles } from "@mui/material";
import { useState } from "react";

const clientSideEmotionCache = createThemeCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [interval, setInterval] = useState(0);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={60 * 10}>
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
    </SessionProvider>
  );
}
