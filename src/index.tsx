import React from "react";
import ReactDOM from "react-dom/client";
import { Benchmark } from './benchmark'


import './styles.css'

import { Box } from './box'

const App = () => (
  <>
    <Box foo='success'>success</Box>
    <Box foo='error'>error</Box>
    <Box foo='info'>info</Box>

    <h1>Benchmark</h1>
    <Benchmark />
  </>
)


const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
