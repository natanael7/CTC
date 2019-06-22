import React from 'react';

import BlogCards from '../components/App/BlogComponents/BlogCards.js'
import FirstSlide from '../components/App/BlogComponents/FirstSlide.js'

function Blog() {
	return (
		<div>
			<FirstSlide />
			<BlogCards />
		</div>
	);
}

export default Blog;
