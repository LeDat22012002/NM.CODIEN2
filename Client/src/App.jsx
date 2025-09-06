import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import { MainLayout } from './layout';
import { Home } from './pages/Public';
function App() {
    return (
        <div className="relative h-screen font-main">
            <Routes>
                <Route path={path.LAYOUT_MAIN} element={<MainLayout />}>
                    <Route path={path.HOME} element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
