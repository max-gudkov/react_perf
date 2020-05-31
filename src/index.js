import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') {
    // const whyDidYouRender = require('@welldone-software/why-did-you-render');
    // whyDidYouRender(React, {
    //     trackAllPureComponents: true,
    //     //include: [/./],
    //     exclude: [/LinkAnchor/]
    // });
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
