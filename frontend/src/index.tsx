import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

const rootElement = window.document.querySelector('#root')
const root = createRoot(rootElement as HTMLElement)
root.render(<App />);