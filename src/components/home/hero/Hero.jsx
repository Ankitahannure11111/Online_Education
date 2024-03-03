import React from 'react'
import "./Hero.css"
import Title from '../../common/title/Title'
const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO THINKIFIC' title='Best online Education' />
                {/* <h3 id='heading'> WELCOME TO THINKIFIC</h3>
                <h1 id='heading' style={{fontSize:'40px'}}>Best online Education</h1> */}
                <p>Online Education Online education is a flexible instructional delivery system that encompasses any kind of learning that takes place via the Internet.
                Through online courses, students can gain the knowledge they need to earn their degree or grow in their profession.</p>
                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <div className="margin"></div>
    </>
  )
}

export default Hero