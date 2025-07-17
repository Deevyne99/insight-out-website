import AboutSection from '../components/AboutSection'
import { BlogSlider } from '../components/BlogSlider'
import ClientContainer from '../components/ClientContainer'
import EventCardContainer from '../components/EventCardContainer'
import HeroContainer from '../components/HeroContainer'
import MissionCardContainer from '../components/MissionCardContainer'
import ServiceCardContainner from '../components/ServiceCardContainer'
import TestimonialContainer from '../components/TestimonialContainer'
import { services } from '../data/data'
TestimonialContainer

const Home = () => {
  return (
    <div>
      <div className='mt-12'>
        <HeroContainer />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <MissionCardContainer />
      </div>
      <div>
        <BlogSlider />
      </div>
      <div>
        <ServiceCardContainner heading={'what we do'} data={services} />
      </div>

      <div>
        <ClientContainer />
      </div>
      <div>
        <EventCardContainer />
      </div>
      <div>
        <TestimonialContainer/>
      </div>
    </div>
  )
}
export default Home
