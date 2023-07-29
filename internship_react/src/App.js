import './App.css';
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    return (
        <div className="App flex flex-col h-screen">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
