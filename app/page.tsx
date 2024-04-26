import Circle from './component/Circle';
import Intro from './component/Intro'
import Do from './component/Do'
import { data } from './_libs/data'


// export const getData = () => {
//   const service = data;
//   console.log(service)
//   return service
// }


export default function Home() {

  // const data = getData()
  console.log(data)

  return (
  
      <div className="home_container">
        <Circle />
        <Intro />
        <Do />
      </div>
   
  );
}



