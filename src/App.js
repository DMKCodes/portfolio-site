import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Bash from './components/pages/bash/Bash';
import AboutPage from './components/pages/about/AboutPage';
import ProjectsPage from './components/pages/projects/ProjectsPage';
import ContactPage from './components/pages/contact/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
    const [showHeader, setShowHeader] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [showFooterLinks, setShowFooterLinks] = useState(true);

    return (
        <Container fluid className='App'>
            {showHeader && <Header />}
            <Routes>
                <Route path='/' element={
                    <Bash 
                        setShowHeader={setShowHeader} 
                        setShowFooter={setShowFooter} 
                        setShowFooterLinks={setShowFooterLinks}
                    />
                } />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
            {showFooter && <Footer showFooterLinks={showFooterLinks} />}
        </Container>
    );
}

export default App;