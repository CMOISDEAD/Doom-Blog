// Modules Import
import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';

// Components Import
import { Navbar } from './Components/Navbar/Navbar';

import { Home } from './Containers/Home/Home';
import { Entrys } from './Containers/Entrys/Entrys';
import { About } from './Containers/About/About';

// Import Styles
const Main = styled.div`
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="entrys/*" element={<Entrys />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Main>
  );
}

export default App;
