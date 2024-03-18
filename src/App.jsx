import './App.css';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Dialog } from './components/ui/dialog';

function App() {
  return (
    <Dialog>
      <div className="flex items-center justify-center min-h-screen">
        <div className="main flex flex-col gap-12 lg:w-[75%] lg:h-[50%] lg:flex-row lg:p-12">
          <div className="sidebar lg:w-2/5">
            <Profile />
          </div>
          <div className="panel lg:w-3/5  overflow-y-auto">
            <Projects />
            <Skills />
            {/* <Contacts /> */}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default App;
