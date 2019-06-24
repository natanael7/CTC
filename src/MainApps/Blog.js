import React from 'react';

import FirstSlide from '../components/Global/FirstSlide.js'

import BlogCards from '../components/App/BlogComponents/BlogCards.js';

let FirstSlideProps = {
    background: 'images/bg_6.jpg',
    span: 'Blog',
    h1: 'Blog'
}

function Blog() {
	return (
		<div>
            <FirstSlide {...FirstSlideProps} />
			<BlogCards />
		</div>
	);
}

export default Blog;
