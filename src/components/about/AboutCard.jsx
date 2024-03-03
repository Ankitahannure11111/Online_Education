import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../Dummydata'
import Awrapper from './Awrapper'
import "./About.css"

const AboutCard = () => {
  return (
    <>
    <section className='aboutHome'>
        <div className='container flexSB'>
            <div className='left row'>
            <img src = "https://st.depositphotos.com/1010613/2429/i/600/depositphotos_24298355-stock-photo-businesswoman-gesturing-on-digital-tablet.jpg" />
            </div>
            <div className='right row'>
                <Title subtitle='LEARN ANYTHING' title='Benifits About Online Learning'/>
                {/* <h3 className='heading'>LEARN ANYTHING</h3>
                <h1 className='heading'>Benefits About Online Learning Expertise </h1> */}
                <div className='items'>{homeAbout.map((val)=>(
                    <div className='items flexSB'>
                        <div className='img'>
                            <img src={val.cover} alt='' />
                        </div>
                        <div className='text'>
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>

                ))}</div>
            </div>
        </div>

    </section>
    <Awrapper/>
    </>
  )
}

export default AboutCard