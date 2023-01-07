import { DownLoad, Feature, SectionWrapper } from "./component";
import assets from "./assets";
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
      <DownLoad />
    </>
  );
};

export default App;
