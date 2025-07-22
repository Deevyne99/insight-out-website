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
      <div className='flex flex-col md:py-16 py-12'>
        <AboutSection />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <MissionCardContainer />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <BlogSlider />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <ServiceCardContainner heading={'what we do'} data={services} />
      </div>

      <div className='flex flex-col md:py-16 py-12'>
        <ClientContainer />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <EventCardContainer />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <TestimonialContainer/>
      </div>
    </div>
  )
}
export default Home
