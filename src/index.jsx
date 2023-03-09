// VERSÕES > 18
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root'); 
const root = createRoot(container);

root.render(<App/>);


// VERSÕES < 18
// import { render } from 'react-dom';
// import { App } from './App';

// render(<App/>, document.getElementById('root'));

// REFERENCE: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis