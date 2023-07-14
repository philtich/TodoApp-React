import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainView } from "./components/MainView";


function App() {

  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
     <MainView/>
    </QueryClientProvider>
  );
}

export default App;
