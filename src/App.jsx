import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section name="intro" />
        <Section name="features" />
        <Section name="cta" />
      </main>
      <Footer />
    </>
  );
}

export default App;
