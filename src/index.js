import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';

/**
 * 
 * functional component
 */
const App = () =>{

    const title = 'This is the title';
    return (
        <div>
            <Header />
            <h1>{title}</h1>
        </div>
        
    );
}


/**
 * class 
 */
// class App extends ReactDOM{
//     render() {
//         return (
//             <h1>This is first component</h1>
//         );
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
