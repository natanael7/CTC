import React from 'react';

function BlogCard(props) {
	return (
		<div className="col-md-4 d-flex ftco-animate">
			<div className="blog-entry align-self-stretch">
				<a
					href="blog-single.html"
					className="block-20"
					// style={{ backgroundImage: 'url("images/image_1.jpg")' }}
					style={{ backgroundImage: `url(${props.background})` }}
				/>
				<div className="text p-4 d-block">
					<div className="meta mb-3">
						<div>
							{/* <a href="#">Sept 10, 2018</a> */}
                            <a href="#">{props.date}</a>
						</div>
						<div>
                            {/* <a href="#">Admin</a> */}
                            <a href="#">{props.postedBy}</a>
						</div>
						<div>
							<a href="#" className="meta-chat">
                                {/* <span className="icon-chat" /> 3 */}
                                <span className="icon-chat" /> {props.comments}
							</a>
						</div>
					</div>
					<h3 className="heading mt-3">
						{/* <a href="#">Hurricane Irma has devastated Florida</a> */}
						<a href="#">{props.title}</a>
					</h3>
					{/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
