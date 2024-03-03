import React from 'react'
import { blog } from '../../../Dummydata'
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <section className='newsletter'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <h1>News-letter -Stay tune and get the latest updates</h1>
                        <span>Far far away, behind the word mountains</span>
                    </div>
                    <div className='right row'>
                        <input type='text' placeholder='Enter email address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <h1>THINKIFIC</h1>
                        <span>Online education & learning</span>
                        <p> Online education comprises audio, text, video, animations, chats with tutors or mentors, and virtual training that is given by the teachers.</p>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>Home</li>
                            <li>All Courses</li>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Pricing</li>
                            <li>Journal</li>
                            <li>Contact</li>


                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Linkss</h3>
                        <ul>
                            <li>Home</li>
                            <li>All Courses</li>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Pricing</li>
                            <li>Journal</li>
                            <li>Contact</li>

                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Recent Post</h3>
                        {blog.slice(0, 3).map((val) => {
                            return (
                                <div className='items flexSB'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                    </div>
                                    <div className='text'>
                                        <span>
                                            <i className='fa fa-user'></i>
                                            <label htmlFor=''>{val.type}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-calendar-alt'></i>
                                            <label htmlFor=''>{val.date}</label>
                                        </span>
                                        <h4>{val.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='box last'>
                        <h3>Have a Questions?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                Meghvarnam 15/3/6 chaitanya park 2, near Akurdi Railway Station sector 29 pradhikaran pune 44, Akurdi, Maharashtra, India - 410507
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +91 9373122871
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                ankitahannure@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>Copyright @2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by AnkitaHannure </p>
            </div>
        </>
    )
}

export default Footer