import styles from "./appstyles.module.scss";
import HomeCover from "./Pages/Home/Components/HomeCover";
import Header from "./CommonComp/Header";
function App() {
  return (
    <div className={styles["app--main-container"]}>
      <Header />
      <HomeCover />
    </div>
  );
}

export default App;
