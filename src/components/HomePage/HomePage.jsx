import Header from "../Header/Header";
import Product from "../Product/Product";
import CategoryModal from "../Modals/CategoryModal";
import "./HomePage.scss";
import Search from "../Search/Search";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div>
        <Search />
        <CategoryModal />
      </div>
      <Product />
    </div>
  );
};

export default HomePage;
