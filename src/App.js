import { useState } from 'react';
import './App.css';
import { Background } from './components/Background';
import { GetBlock } from './components/GetBlock';
import { Header } from './components/Header';
import PostBlock from './components/PostBlock';
import { Wrapper } from './components/Wrapper';

function App() {
  const [page, setPage] = useState(1);

  return (
    
    <div className="flex flex-col justify-center">
      <Header/>
      <Wrapper>
        <Background/>
        <GetBlock page={page} setPage={setPage}/>
        <PostBlock page={page} setPage={setPage} />
      </Wrapper>
    </div>
  );
}

export default App;
