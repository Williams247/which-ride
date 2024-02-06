import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Info from "./Components/Info";
import Whichride from "./Components/WhichRide";
import SignUpSection from "./Components/SignUpSection";
import Footer from "./Components/Footer";

const WhichRideSite = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Banner />
      </Layout>
     <Info />
     <Whichride />
     <SignUpSection />
     <Footer />
    </div>
  )
};

export default WhichRideSite;
