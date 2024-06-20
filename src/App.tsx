import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from './components/containers/PageLayout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Nav />
            <PageLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </PageLayout>
        </>
    );
}

export default App;

{
    /* <h1 className="font-xl color text-primary text-3xl "> Custom Components Playground</h1>
<h1 className="font-xl color text-distant text-3xl "> Custom Components Playground</h1> */
}

{
    /* <ButtonProp buttonType={'default'}>Click me!</ButtonProp> */
}
{
    /* <Table></Table> */
}
{
    /* <Form /> */
}
