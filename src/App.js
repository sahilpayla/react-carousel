
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);


  if (!data || !data.length) return null;


  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <img src='/static/images/super-shoes.png' alt='logo'></img>
        </div>
        <div className='carousel'>

          {data.map((item) => {
            const { id, name, oldPrice, newPrice, image } = item;
            return (
              <div className='item' key={id}>
                <div className='image'>
                  <img src={image} alt='image-logo'></img>
                </div>
                <div className='info'>
                  <span className='name'>{name}</span>
                  <span className='oldPrice'>$$ {oldPrice}</span>
                  <span className='newPrice'>$$ {newPrice}</span>
                </div>
              </div>
            )
          })}

        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
