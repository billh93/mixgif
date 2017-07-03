import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from 'utils/registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'containers/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
