import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default App;
