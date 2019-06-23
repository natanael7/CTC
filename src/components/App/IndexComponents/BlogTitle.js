import React from 'react'

function BlogTitle(props){
    return(
        <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </div>
    )
}

export default BlogTitle