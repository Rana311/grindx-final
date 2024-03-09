import React, {useState} from 'react';
import Keeper from './Keeper';
import Todo from './Todo';
  const Trigger = () => {
    const [componentVisible, setComponentVisible] = useState();
    const showComponent = (component) => {
        setComponentVisible(component);
    };

    return (
        <div className="App">
            <button className = "toggler" onClick={() => showComponent('Keeper')}>Keeper App</button>
            <button className = "toggler" onClick={() => showComponent('Todo')}>Todo List</button>

            {componentVisible === 'Keeper' && <Keeper />}
            {componentVisible === 'Todo' && <Todo />}
        </div>
    );
};
export default Trigger;

