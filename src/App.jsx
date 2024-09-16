
import React from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { AboutUsSection } from './Components/AboutUsSection';
import { SubscribeSection } from './Components/SubscribeSection';
import { ArticlesSection } from './Components/ArticleSection'; // Note: Updated import path to match component name
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="articles">
          <ArticlesSection />
        </section>
        <section id="about">
          <AboutUsSection />
        </section>
        <section id="subscribe">
          <SubscribeSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;



