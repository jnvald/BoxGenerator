
import React, {useState, Fragment} from 'react';
import './estilos.css';
import Cajitas from './componentes/Cajitas';
import BoxList from './componentes/BoxLlist';




function App() {

    const [arrayColor, setArrayColor] = useState([])

    const [colorBox, setColorBox] = useState({
      id: '',
      color: ''
    })

  return (
    <main>
      <div className="App">
          <h1>Generador de cajas de colores</h1>
      <Fragment>
      <div>
      <Cajitas colorBox={ colorBox } setColorBox = { setColorBox } arrayColor = { arrayColor } setArrayColor = { setArrayColor }/>
      {arrayColor.length > 0 ? arrayColor.map((color, index) => {
        console.log(colorBox)
          return (<BoxList key={index} colorBox={color} />)

        }) : 'No hay cajas creadas'}
    </div>
      </Fragment>
      </div>
    </main>
  );
}

export default App;
