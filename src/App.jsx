import './App.css';
import { Dialog } from './components/ui/dialog';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Panel from './layout/Panel';
import Sidebar from './layout/Sidebar';

function App() {
  return (
    <Dialog>
      <div className="flex flex-col gap-12">
        <Sidebar />
        <Panel />
      </div>
    </Dialog>
  );
}

export default App;
