import { companyAttributes } from '../data/data'
import MissionCard from './MissionCard'


const MissionCardContainer = () => {

  return (
    <div className=' flex flex-col bg-[var(--background-light)]  py-24'>
      <div className='container flex   flex-col md:flex-row  gap-6'>
        {
          companyAttributes.map((attribute) =>{

            return (<MissionCard name={attribute.name} description={attribute.description} key={attribute.id}/>)
          })
        }
       
      </div>
    </div>
  )
}
export default MissionCardContainer
