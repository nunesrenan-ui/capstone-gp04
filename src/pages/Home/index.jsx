import { HomePageLayout, ScrollDownHome } from "./styles";
import HomePageCard from "../../components/HomePageCard";
import AboutGiver from "../../components/AboutGiver";

import HeaderAll from "../../components/Header";
import FooterAll from "../../components/Footer";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HeaderAll></HeaderAll>
      <HomePageLayout>
        <HomePageCard />
      </HomePageLayout>
      <ScrollDownHome>
        <AboutGiver />
      </ScrollDownHome>
      <FooterAll />
    </motion.div>
  );
};

export default HomePage;
