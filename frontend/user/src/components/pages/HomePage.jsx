import React from 'react';
import { Welcome, Stories, NewsLetter, Footer } from '../';

export default function HomePage() {
	return (
		<>
			<Welcome />
			<Stories />
			<hr className='mt-20 hidden sm:block' />
			<NewsLetter />
			<Footer />
		</>
	);
}
