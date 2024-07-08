import ReactDOM from 'react-dom/client';
import React from 'react';

import Buttons from './Buttons.jsx';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Buttons count={5} />);
