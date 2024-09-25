import '../styles/app.css';
import Header from './Header';
import TestimonialsApp from '../02-testimonials/TestimonialsApp';
// import EsignatureApp from '../01-e-signature/EsignatureApp';

function App() {
  return (
    <div className="App">
     <Header /> 
      <TestimonialsApp />
     {/* <EsignatureApp /> */}
    </div>
  );
}

export default App;
