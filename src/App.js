import { appRouter } from './pages/AppRouter';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Title1 from './components/Title1';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page8_1 from './pages/Page8_1';
import Page9 from './pages/Page9';

import { AuthContextProvider } from './contexts/AuthContext';
// css 追加
import './App.css';

// ページ情報を定義して appRouter に設定
const pages = [
    { key: 'Home', path: '/', element: <Home /> },
    { key: 'Page1', path: '/page1', element: <Page1 /> },
    { key: 'Page2', path: '/page2', element: <Page2 text="text sample" /> },
    { key: 'Page3', path: '/page3', element: <Page3 /> },
    { key: 'Page4', path: '/page4', element: <Page4 /> },
    { key: 'Page5', path: '/page5', element: <Page5 /> },
    { key: 'Page6', path: '/page6', element: <Page6 /> },
    { key: 'Page7', path: '/page7', element: <Page7 /> },
    { key: 'Page8', path: '/page8', element: <Page8 /> },
    { key: 'Page8_1', path: '/page8_1', element: <Page8_1 /> },
    { key: 'Page9', path: '/page9', element: <Page9 /> },
];
const router = appRouter(pages);

const App = () => {
    const styleSheet = {
        color: "green",
        fontSize: "70px"
    }

    const styleSheet2 = {
        color: 'red',
        fontSize: "50px"
    }
    return (
        <>

            <AuthContextProvider>
                {router.navbarLink}
                {/* 位置調整で main で括る */}

                <main>
                    {/* <Title1 h1text={"HelloWorld"} h1style={styleSheet} divstyle={styleSheet2}>
                        <li>Slick Back</li>
                    </Title1>
                    <h1 style={{ color: 'red', fontSize: "50px" }}>Hello World</h1> */}
                    <p style={styleSheet}>App.jsx</p>
                    <Title1 a={1}></Title1>
                    {router.browserRouter}
                </main>
            </AuthContextProvider>

        </>
    );
};

export default App;
