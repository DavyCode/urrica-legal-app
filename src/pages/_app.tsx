import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "scripts/wdyr";
import { store } from "../store";
import "../styles/globals.css";
import "react-phone-input-2/lib/style.css";
import { HotToaster } from "../utils/AppToast";
import { QueryClient, QueryClientProvider } from "react-query";
import { millisecondsFromHours } from "utils/milliSecondsFromHours";
import { FIVE_MINUTES_IN_MS } from "constants/urrica";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      cacheTime: FIVE_MINUTES_IN_MS,
      staleTime: millisecondsFromHours(4),
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Provider store={store}>
        <HotToaster />
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
