import React from 'react';

let photo = [];
photo[0] = 'images/cause-2.jpg';
photo[1] = 'images/cause-3.jpg';
photo[2] = 'images/cause-4.jpg';
photo[3] = 'images/cause-5.jpg';
photo[4] = 'images/cause-6.jpg';
photo[5] = 'images/image_3.jpg';
photo[6] = 'images/image_1.jpg';
photo[7] = 'images/image_2.jpg';

function GalleryBox() {
	return (
		<div>
			<section className="ftco-section ftco-gallery">
				<div className="container">
					<div className="d-md-flex">
						<a
							href={photo[0]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[0]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
						<a
							href={photo[1]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[1]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
						<a
							href={photo[2]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[2]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
						<a
							href={photo[3]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[3]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
					</div>
					<div className="d-md-flex">
						<a
							href={photo[4]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[4]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
						<a
							href={photo[5]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[5]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
						<a
							href={photo[6]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[6]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
						<a
							href={photo[7]}
							className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
							style={{ backgroundImage: `url(${photo[7]}` }}
						>
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="icon-search" />
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default GalleryBox;
