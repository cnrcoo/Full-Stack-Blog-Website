const styles = {
	container:
		'w-full shadow-md border-b-2 border-gray-50 bg-white rounded-b-xl',
	innerContainer:
		'w-full max-w-screen-xl h-16 mx-auto xl:px-8 px-4 flex justify-between items-center',
	logo: 'handWritten tracking-wider font-semibold text-2xl text-[#BF5A7F]',
	list: 'flex justify-between items-center text-center',
	listItem:
		'font-semibold text-gray-700 text-[#402232] opacity-90 text-sm sm:ml-14 ml-6',
	button:
		'w-24 bg-[#6649A6] font-semibold rounded-xl text-sm p-2 ml-12 hidden sm:block hover:bg-[#BF5A7F] transition-all duration-500',
};

export default function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.logo}>StoryLine</div>

				<ul className={styles.list}>
					<li className={styles.listItem}>
						<a href='/'>Blog</a>
					</li>
					<li className={styles.listItem}>
						<a href='/'>About</a>
					</li>
					<li className={styles.listItem}>
						<a href='/'>Pricing</a>
					</li>

					<li className='text-white'>
						<button className={styles.button}>Free Trial</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
