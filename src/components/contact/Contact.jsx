import React from 'react'
import "./Contact.css"
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867187.666169696!2d76.76983739999999!3d18.81817715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709194982749!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
        <>
            <Back title='Contact Us' />
            <section className='contact padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={map}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact Us</h1>
                        <p>Est quidem autem  quo, provident eum iusto?</p>
                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS: </h4>
                                <p> Meghvarnam 15/3/6 chaitanya park 2, near Akurdi Railway Station sector 29 pradhikaran pune 44, Akurdi, Maharashtra, India - 410507</p>
                            </div>
                            <div className="box">
                                <h4>Email: </h4>
                                <p>ankitahannure@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>Phone: </h4>
                                <p>9373122871</p>
                            </div>
                        </div>
                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name'/>
                                <input type='email' placeholder='Email'/>
                               
                            </div>
                            <input type='email' placeholder='Subject'/>
                            <textarea cols='30' rows='10'>
                                    Create a message here ...
                                </textarea>
                                <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact