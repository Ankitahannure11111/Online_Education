import React from 'react'
import "./Blog.css"
import { blog } from '../../Dummydata'

const BlogCard = () => {
    return (
        <>
            {blog.map((val) => {
                return (
                    <div className='items shadow'>
                        <div className='img'>
                            <img src={val.cover} alt='' />

                        </div>
                        <div className='text'>
                            <div className='admin flexSB'>
                                <span>
                                    <i className='fa fa-user'></i>
                                    <label htmlFor=''>{val.type}</label>
                                </span>
                                <span>
                                    <i className='fa fa-comments'></i>
                                    <label htmlFor=''>{val.com}</label>
                                </span>
                            </div>
                            <h1>{val.title}</h1>
                            <h2>{val.desc}</h2>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BlogCard