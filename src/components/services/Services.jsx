// import React from 'react';
// import './Services.css';
// // import Menu from "./Menu";
// import Image1 from '../../assets/winner-1.jpg'
// import Image2 from '../../assets/service-2.svg'
// import Image3 from '../../assets/service-3.svg'

// const data = [

//     {
//         id: 1,
//         image: Image1,
//         title: "NeoCodeathon Winner",
//         url: "https://cut-off-calculator.vercel.app",
//         description:
//             "Won First Place in All India Neo Codeathon February Edition, awarded a Smartwatch and Certificate for outstanding achievement",
//     },
//     {
//         id: 2,
//         image: Image2,
//         title: "First Year - First Rank Holder",
//         description:
//             "First Rank Holder in the II Semester, received a Certificate of Appreciation.",
//     },
//     {
//         id: 3,
//         image: Image3,
//         title: "Second Year - First Rank Holder",
//         description:
//             "First Rank Holder in the III Semester, received a Certificate of Appreciation.",
//     },
//     {
//     id: 4,
// 		image: Image2,
// 		title: "Aptitute Website",
//         description:
//             "First Rank Holder in the III Semester, received a Certificate of Appreciation.",
// 		repositoryUrl: "https://github.com/GregSithole/react-native-jobs"
//     }
// ];

// const Services = () => {
//     return (
//         <section className="services container section" id="services">
//             <h2 className="section__title">Achievements</h2>

//             <div className="services__container grid">
//                 {data.map(({ id, image, title, description }) => {
//                     return (
//                         <div className="services__card" key={id}>
//                             <img src={image} alt='' className='services__img' width="80" />

//                             <h3 className="services__title">{title}</h3>
//                             <p className="services__description">{description}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//             {/* <div className="portfolio__filters">
// 				<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Menu); setActiveFilter(0) }}>
// 					All
// 				</span>
//             </div> */}
//         </section>
//     )
// }

// export default Services


import React, { useState } from "react";
import "./Services.css";

import Menu from "./Menu";
import { RiLink } from "react-icons/ri";

import { motion } from "framer-motion";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);
	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	return (
		<section className="portfolio container section" id="services">
			<h2 className="section__title">Acievements</h2>

			<div className="portfolio__filters">
				<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Menu); setActiveFilter(0) }}>
					ALL
				</span>
				<span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("NeoPat Winner"); setActiveFilter(1) }}>
                    NeoPat Winner
				</span>
				<span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("First Rank Holder"); setActiveFilter(2) }}>
					First Rank Holder
				</span>
                <span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Second Rank Holder"); setActiveFilter(3) }}>
					Second Rank Holder
				</span>
			</div>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title, category, url } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>

							<span className="portfolio__category">{category.join(', ')}</span>
							<h3 className="portfolio__title">{title}</h3>
							<a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
								<RiLink className="portfolio__button-icon" />
							</a>
							{/* <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
								<RiGithubLine className="portfolio__button-icon" />
							</a> */}
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
