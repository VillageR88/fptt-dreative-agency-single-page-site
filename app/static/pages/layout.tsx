import { render } from 'preact';
// import DataContext from './_lib/DataContext'; // placeholder
import Navbar from './components/Navbar';
import Home from './page';
import Footer from './components/Footer';
import './globals.css';

document.body.className =
  'min-h-dvh mx-auto md:min-h-screen max-w-[1440px] flex flex-col items-center font-commissioner justify-space-between';

function App() {
  return (
    <>
      {/* <DataContext> */}
      <Navbar />
      <main className="mx-auto mb-auto flex w-full flex-col items-center overflow-x-clip">
        <Home />
      </main>
      <Footer />
      {/* </DataContext> */}
    </>
  );
}

function Body() {
  return <App />;
}
render(<Body />, document.body);
