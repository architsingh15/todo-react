import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PaperTodo from './components/PaperTodo';

ReactDOM.render(<PaperTodo />, document.getElementById('root'));
registerServiceWorker();
