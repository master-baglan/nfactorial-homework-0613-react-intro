import './App.css';
import { compareAsc, format } from 'date-fns'
import image1 from './img/1.jpeg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpeg';
import image4 from './img/4.jpeg';
import image5 from './img/5.jpeg';
import logo from './img/masterLogo.png';
const fns = require('date-fns')

function App() {
  return (
    <div>
      <div className='header'>
        <div className='logo'> <img src = {logo} /> </div>
      <div className='searchBar'> 
          <div className='text1'> hello M A S T E R </div>
      </div>
      <div className='data'>
         <div className = 'text2'>{fns.format(new Date(), "dd-MM-yyyy '  ' HH:mm ")} </div>
          </div>
      </div>
      
      <div className ='image-wrapper'>
        <div className ='image-container'> 
        <img src = {image1} /> 
        <div className='text'>Hey</div>
      </div>
        <div className ='image-container'> <img src = {image2}/> 
        <div className='text'>Let's</div>
      </div>
      <div className ='image-container'> <img src = {image3}/>
      <div className='text'>Give</div>
      </div>
      <div className ='image-container'> <img src = {image4}/> 
      <div className='text'>All</div>
      </div>
      <div className ='image-container'> <img src = {image5}/>
      <div className='text'> You Can
      </div>
      </div>
      
    </div>
    
  
    
    </div>

  );
}

export default App;
