import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Layout from './components/common/Layout';
import { Homepage } from './todos/Homepage';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App
