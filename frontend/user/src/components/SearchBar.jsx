import { FiSearch } from 'react-icons/fi';

const styles = {
	container:
		'mx-auto max-w-xs h-11 text-center rounded-xl hover:opacity-100 transition-all duration-300 opacity-80 bg-gray-300 px-4 py-2 flex items-center justify-between',
	left: 'flex items-center',
	searchBox: 'bg-transparent text-sm text-[#402232] focus:outline-none',
	button:
		'bg-[#6649A6] h-7 px-3 rounded-xl text-white text-xs font-bold tracking-widest',
};

export default function SearchBar() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className='mr-2'>
					<FiSearch color='gray' opacity={0.66} />
				</div>
				<input
					type='text'
					placeholder='Search'
					className={styles.searchBox}
				/>
			</div>

			<button type='submit' className={styles.button}>
				Go
			</button>
		</div>
	);
}
