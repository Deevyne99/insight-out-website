import AboutCard from '../components/AboutCard'
import HeroContainer from '../components/HeroContainer'
import MissionCardContainer from '../components/MissionCardContainer'
import ApproachContainer from '../components/OurApproach'
import ServiceCardContainner from '../components/ServiceCardContainer'
import { developmentArray } from '../data/data'

export const About = () => {
  return (
    <section>
      <div>
        <HeroContainer />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <AboutCard/>
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <ServiceCardContainner
          data={developmentArray}
          heading='Why choose us'
        />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <ApproachContainer/>
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <MissionCardContainer/>
      </div>
    </section>
  )
}
