import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  // 기본 세팅
  AOS.init()
  AOS.refresh()

  return (
    <div className="App">
        <div data-aos="fade-in">fadein</div>
        <div data-aos="fade-up">fadeup</div>
    </div>
  );
}

export default App;
