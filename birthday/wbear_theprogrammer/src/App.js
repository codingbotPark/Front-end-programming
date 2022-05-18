import './App.css';
import {useState} from "react" 

import box from "./box.png"
import me from "./me.jpg"

function App() {

  const [isClick,setIsClick] = useState(false);
  return (
    <div className="wrapper">
      
      <div className="container">
      <img src={isClick ? me : box}
        onClick={() => setIsClick(true)}
      />
      <h2 className="test">
        준성! 밑에 글 읽어보고 Click me!
      </h2>
      </div>

      <h1 className="first">
        나르샤 한다고 시간이 없었어ㅋㅋㅋ
      </h1>
      <h1>
        지금 위에 올라와서 만드는 중 생일축하해!
      </h1>

      {
        isClick &&
        <h1 className='mainH1'>선물은 나지??</h1>
      }
    </div>
  );
}

export default App;
