import React from 'react';
import ReactDOM from 'react-dom';
import {JsonInspector} from '../src/JsonInspector';

export class App extends React.Component {
    render() {
        return <JsonInspector></JsonInspector>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
