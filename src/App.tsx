import Header from './components/Header';
import Hero from './components/Hero';
import WhoCanJoin from './components/WhoCanJoin';
import WhyChoose from './components/WhyChoose';
import FooterCTA from './components/FooterCTA';
import './App.css';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-[#fdfdfc] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhoCanJoin />
        <WhyChoose />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
