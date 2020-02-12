import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  // eslint-disable-next-line
  const [users, saveUsers] = useState([]);

  const createUser = user => {
    saveUsers([
      ...users,
      user
    ]);
    
  }

  return (
    <Fragment>
      <h1>Agregar Usuarios:</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              createUser={createUser}
            />
          </div>
          <div className='one-half column'>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
