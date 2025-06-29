import AboutCard from '../components/AboutCard'
import HeroContainer from '../components/HeroContainer'
import ApproachContainer from '../components/OurApproach'
import ServiceCardContainner from '../components/ServiceCardContainer'
import { developmentArray } from '../data/data'

export const About = () => {
  return (
    <section>
      <div>
        <HeroContainer />
      </div>
      <div>
        <AboutCard/>
      </div>
      <div>
        <ServiceCardContainner
          data={developmentArray}
          heading='Why choose us'
        />
      </div>
      <div>
        <ApproachContainer/>
      </div>
    </section>
  )
}
