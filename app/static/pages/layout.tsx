import { render } from 'preact';
import DataContext from './_lib/DataContext';
import { Router } from 'preact-router';
import Home from './page';
import About from './about/page';
import Location from './location/page';
import Careers from './careers/page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './_lib/const';
import './globals.css';

document.body.className = 'min-h-dvh  md:min-h-screen flex flex-col items-center justify-space-between';

function App() {
  return (
    <>
      <DataContext>
        <Navbar />
        <main className="mx-auto mb-auto flex w-full  flex-col items-center overflow-x-clip ">
          <Router>
            <Home path={routes.home} default />
            <About path={routes.about} />
            <Location path={routes.location} />
            <Careers path={routes.careers} />
          </Router>
        </main>
        <Footer />
      </DataContext>
    </>
  );
}

function Body() {
  return <App />;
}
render(<Body />, document.body);
