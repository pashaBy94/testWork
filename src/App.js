import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Test from './Test';
import PushTest from './PushTest';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='app'>
          <div className='app-wrapper'>
            <div>
              <a href='/test'>Test</a><br />
              <a href='pus' >Pus</a>

            </div>
            <div className='app__wrapper_content'>
              <Suspense>
                <Routes>
                  <Route path='/test' element={<Test />} />
                  <Route path='/pus' element={<PushTest />} />

                  Test
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}
