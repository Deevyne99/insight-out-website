import HeroContainer from '../components/HeroContainer'
import ServiceCardContainner from '../components/ServiceCardContainer'
import { developmentArray } from '../data/data'

export const About = () => {
  return (
    <section>
      <div>
        <HeroContainer />
      </div>
      <div></div>
      <div>
        <ServiceCardContainner
          data={developmentArray}
          heading='Why choose us'
        />
      </div>
    </section>
  )
}
