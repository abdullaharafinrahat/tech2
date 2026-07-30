
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
// import { Pricing } from '../components/sections/Pricing';
import { WhyUs } from '../components/sections/WhyUs';
import { Portfolio } from '../components/sections/Portfolio';
import { About } from '../components/sections/About';
import { Process } from '../components/sections/Process';
import { Blog } from '../components/sections/Blog';
import { Contact } from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Pricing /> */}
      <WhyUs />
      <Portfolio />
      <About />
      <Process />
      <Blog />
      <Contact />
    </>
  );
}
