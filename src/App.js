import Navbar from './navbar'
import BottomNav from './buttomnav'
import CheckBox from './checkbox'
import { AiFillPlusCircle } from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className="heading">
          Clients like to know what you know - add your education here.{' '}
        </h1>
        <p>
          You don't have to have a degree. Adding any relevant education helps make your profile more visible.
        </p>
      </div>
      <div className="add-experience">
        <AiFillPlusCircle className="icon" />
        <p>Add Experience</p>
      </div>
      <CheckBox />
      <BottomNav />
    </div>
  )
}

export default App
