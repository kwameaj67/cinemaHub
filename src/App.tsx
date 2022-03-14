import React,{Suspense} from 'react';
import './App.css';

const MainRouter = React.lazy(()=> import('./Router/routes'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className="loader">
            <h1>Cinema Hub</h1>
        </div>
      }>
         <MainRouter/>
      </Suspense>
    </div>
  );
}

export default App;
