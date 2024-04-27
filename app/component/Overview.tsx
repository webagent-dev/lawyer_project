
import '../styles/overview.css'
import Image from 'next/image'
const Overview = () =>{
    return(
        <section className="content">
    <div className="main-content">
      <div className="grid-content">
        <div className="content-1">
          <div className="content-1-img">
            <Image src="/img/contract.jpg" layout='fill' alt="full-image"  objectFit='cover' className="image" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti perspiciatis</p>
        </div>

        <div className="content-2">
          <div className="sub-content-1">
          <div className='img-1'>
            <Image src="/img/gavel.png" alt=""  layout='fill'   objectFit='cover' />
            </div>
            <div className="text">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, expedita.</p>
          </div>
          </div>

          <div className="sub-content-1">
          <div className='img-1'>
            <Image src="/img/gavel.png" alt=""  layout='fill'   objectFit='cover' />
            </div>
            <div className="text">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, expedita.</p>
          </div>
          </div>
          <div className="sub-content-1">
            <div className='img-1'>
            <Image src="/img/gavel.png" alt=""  layout='fill'   objectFit='cover' />
            </div>
            
            <div className="text">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, expedita.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Overview