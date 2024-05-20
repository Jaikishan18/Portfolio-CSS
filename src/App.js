import './App.css';
import Header from './Components/Header';
import Service from './Components/Service/Service';
import Experience from './Components/Experience/Experience';
import Tabs from './Components/Tabs/Tabs';
import Portfolio from './Components/Portfolio/Portfolio';
import Feedback from './Components/Feedback/Feedback';
import Blog from './Components/Blog/Blog';
import Price from './Components/Price/Price';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.css'
import './Components/Price/Price.css'
import './Components/Blog/Blog.css'
import './Components/Feedback/Feedback.css'
import './Components/Tabs/Tabs.css'
import './Components/Portfolio/Portfolio.css'
import './Components/Experience/Experience.css'
import './Components/Service/Service.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
       <Header/>
       <Service/>
       <Experience/>
       <Tabs/>
       <Portfolio/>
       <Feedback/>
       <Blog/>
       <Price/>
       <Footer/>
    </div>
  );
}

export default App;
