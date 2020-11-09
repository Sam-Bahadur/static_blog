import React from 'react'
import {Link} from 'react-router-dom'

export default function BookItem(item) {
    const dt  = new Date(item.date)
    var month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"][dt.getMonth()];
    return (
        <>
                <div className="blog_card">
                <div className="flex_image">
                    <img 
                    src= {`uploads/${item._id}.jpg`}
                     onError={(e) => {
                        e.target.src = "uploads/2.jpg" }}
                    // src={`uploads/${item._id}.jpg`}
                    />
                </div>
                <div className="flex_desc">
                <Link to={`/blogs/${item._id}`} className="book_item">
                    <div className="book_header">
                    <h2>{item.title}</h2>
                    </div>
                    <div className="book_items">
                        <div className="blog_author_img">
                            <div className="blog_author_img_img">
                            <img className="small_pic" 
 src= {
    "img_author/" + item.author.toLowerCase() + ".png"}
 onError={(e) => {
    e.target.src = "img_author/avatar.png" }}
/>                        
  {/* <img className="small_pic" 
                            src={ 

                                "img_author/" + item.author.toLowerCase() + ".png" ? 
                            "img_author/" + item.author.toLowerCase() + ".png" :
                            "img_author/avatar.png"
                            } alt=""/> */}
                            </div>
                            <div className="book_author">
                                <h3>
                            {item.author}
                                </h3>
                            </div>
                            
                        </div>
                        <div className="blog_date">
                                <h6>
                                {/* {item.date.slice(0,10)} */}
                                &#128197;	   {month.slice(0,3)} {dt.getFullYear()}
                                </h6>
                                </div>
                    <div className="book_desc">
                    {item.description.slice(0,90)}...
                    </div>
                    </div>
                </Link>
                </div>
                </div>
        </>
    )
}
