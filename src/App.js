import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import AboutFeature from './features/About';
import BLogFeature from './features/Blog';
import LoginFeature from './features/Login';
import ProductFeature from './features/Product';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="*" element={<ProductFeature />} />
                <Route path="/about" element={<AboutFeature />} />
                <Route path="/blog" element={<BLogFeature />} />
                <Route path="/login" element={<LoginFeature />} />
            </Routes>
        </div>
    );
}

export default App;
