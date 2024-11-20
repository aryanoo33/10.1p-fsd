import './App.css';
import CardList from './CardList';
import Main_Photo from './mainimg';
import SearchBar from './searchbar';
import Mid_section from './mid_section';
import BottomBar from './bottomsection';
import Top_section from './top_section';
import Btm_section from './featured_Tut';
import Mid_section2 from './mid_section2';
import Footer from './Footer';
import CardList2 from './MyTutorial';

function App() {
  return (
    <div>
      <SearchBar/>   
      <Main_Photo/>
      <Top_section/>
      <CardList />
      <Mid_section />
      <CardList2/>
      <Btm_section/>
      <Mid_section2/>
      <Footer/>
      <BottomBar/>
    </div>
  );
}

export default App;