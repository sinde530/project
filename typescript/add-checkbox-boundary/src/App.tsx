import { useState } from 'react';
import './App.css';

const App = () => {
  const [firstPersonaForm, setFirstPersonaForm] = useState({
    personaName: '',
    personaImage: null,
    openRange: '',
    boundary: '',
    firstPersonaData: false,
    friendsList: [],
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;

    if (name === 'openRange') {
      setFirstPersonaForm((prevState: any) => ({
        ...prevState,
        openRange: value,
        boundary: value,
      }));
    } else {
      setFirstPersonaForm((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <input
        type="text"
        name="personaName"
        placeholder="Persona Name"
        value={firstPersonaForm.personaName}
        onChange={handleInputChange}
      />

      <input
        id="public"
        type="radio"
        name="openRange"
        className={
          firstPersonaForm.openRange === 'public'
            ? 'radio-input active'
            : 'radio-input'
        }
        value="public"
        checked={firstPersonaForm.openRange === 'public'}
        onChange={handleInputChange}
      />
      <label htmlFor="public" className="radio-label"></label>

      <input
        id="private"
        type="radio"
        name="openRange"
        className={
          firstPersonaForm.openRange === 'private'
            ? 'radio-input active'
            : 'radio-input'
        }
        value="private"
        checked={firstPersonaForm.openRange === 'private'}
        onChange={handleInputChange}
      />
      <label htmlFor="private" className="radio-label"></label>

      <input
        id="hidden"
        type="radio"
        name="openRange"
        className={
          firstPersonaForm.openRange === 'hidden'
            ? 'radio-input active'
            : 'radio-input'
        }
        value="hidden"
        checked={firstPersonaForm.openRange === 'hidden'}
        onChange={handleInputChange}
      />
      <label htmlFor="hidden" className="radio-label"></label>

      <div>Boundary: {firstPersonaForm.boundary}</div>
    </div>
  );
};

export default App;
