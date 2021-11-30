import React, { useState } from 'react';
import { render } from 'react-dom';
import Parent from './Parent';
import './style.css';

const App = () => {
  const [type, setType] = useState('first type');
  const [otherType, setOtherType] = useState('other type a');

  return (
    <div>
      <button
        onClick={() =>
          setType((t) => (t === 'first type' ? 'second type' : 'first type'))
        }
      >
        change type
      </button>
      <button
        onClick={() =>
          setOtherType((t) =>
            t === 'other type a' ? 'other type b' : 'other type a'
          )
        }
      >
        change other type
      </button>
      <Parent type={type} anotherType={otherType} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
