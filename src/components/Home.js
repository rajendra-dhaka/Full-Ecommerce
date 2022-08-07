import Filter from "./Filter";
import Header from "./Header";
import Items from "./Items";

const Home = () => {
  return (
    <div className="grid-container">
      <header>
        <Header />
      </header>
      <main>
        <div className="content">
          <div className="sidebar">
            <Filter />
          </div>
          <div className="main">
            <Items />
          </div>
        </div>
      </main>
      <footer>
        <h3>&copy; Shopperzz. All rights reserved.</h3>
      </footer>
    </div>
  );
};

export default Home;
