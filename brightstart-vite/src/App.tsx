import "./App.css";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Program from "./Program";
import School from "./School";
import Welcome from "./Welcome";

function App() {
    return (
        <div>
            <Header />
            <div className="mx-auto">
                <Welcome />
                <School />
                <Program />
                <Faq />
            </div>
            <Footer />
        </div>
    );
}

export default App;
