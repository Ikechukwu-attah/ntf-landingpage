import { DownLoad, Feature, SectionWrapper } from "./component";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store for Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using  ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description=" First mobile app development"
        mockupImg={assets.homeCards}
        reverse
      />
      <Feature />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs on all users devices. You can easily get your app into peoples hand"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description=" The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT "
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <DownLoad />

      <div
        className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center `}
      >
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by <span className="bold">Attah Anthony</span>
        </p>
      </div>
    </>
  );
};

export default App;
