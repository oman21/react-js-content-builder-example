import { useEffect, useState } from 'react';
import ContentBuilder from './components/ContentBuilder';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <ContentBuilder 
        show={show}
        data={data}
        onClose={(data)=>{
          setShow(false)
          console.log('data', data);
          setData(data);
        }}
      />
      <button className="btnSave" onClick={()=>setShow(true)}>Open</button>

    </div>
  );
}

export default App;
