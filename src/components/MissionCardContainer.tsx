import { companyAttributes } from '../data/data'
import MissionCard from './MissionCard'


const MissionCardContainer = () => {

  return (
    <div className=' flex flex-col bg-[var(--background-light)]  py-24'>
      <div className='container  flex gap-6'>
        {
          companyAttributes.map((attribute, index) =>{

            return (<MissionCard name={attribute.name} description={attribute.description} key={attribute.id}/>)
          })
        }
       
      </div>
    </div>
  )
}
export default MissionCardContainer
