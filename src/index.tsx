import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Home from 'views/home';
import 'styling/index.css';

ReactDOM.render(
    <StrictMode>
        <Home />
    </StrictMode>,
    document.getElementById('root'),
);
