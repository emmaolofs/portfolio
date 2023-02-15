import './App.css';
import Footer from './components/footer'
import Heading from './components/heading'
import NavigationButtons from './components/navigationButtons';

function App() {
  return (
    <div className="App">
      <Heading/>
      <NavigationButtons/>
      <Footer/> 
    </div>
  );
}

export default App;
