import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import tree from './Tree.jsx';

ReactDOM.render(
  <App tree={tree.state.treeData} />,
  document.getElementById('root')
);
