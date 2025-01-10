import './App.css'
import Navbar from "./components/Navbar.tsx";
import Layout, {Header} from "antd/es/layout/layout";

function App() {
    return (
        <>
            <Layout>
                <Header><Navbar/></Header>
            </Layout>
            <p></p>
        </>
    )
}

export default App
