import React from 'react';
import { ThemeProvider } from './components/ThemeContext.jsx';
import Toolbar from './components/Toolbar.jsx';
import ProductFilter from './components/ProductFilter.jsx';
import Counter from './components/Counter.jsx';
import EffectDemo from './components/EffectDemo.jsx';
import RefDemo from './components/RefDemo.jsx';



export default function App() {
  return (
    <>
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h1>React Hooks Demo - useContext</h1>
        <Toolbar />
      </div>
      </ThemeProvider>
      <br/>
      <ProductFilter />
      <Counter  />
      <br/>
      <EffectDemo />
      <br/>
      <RefDemo />


    </>
    
  );
}
