import { RiEmotionSadLine } from 'react-icons/ri';
import { TbCornerRightDown } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';

const styles = {
	container:
		'w-full max-w-screen-lg h-72 mx-auto py-4 flex flex-col justify-center items-center',
	flexBox: 'flex justify-center items-center w-full',
	text: 'md:text-2xl text-base font-semibold text-center text-gray-500 mx-1',
	text2: 'md:text-sm text-xs font-semibold text-center text-[#BF5A7F] italic tracking-widest',

	searchBox:
		'w-[80%] sm:w-[90%] max-w-md px-4 py-2 mt-2 mb-1 bg-gray-100 opacity-80 flex justify-between items-center rounded-2xl',
	input: 'bg-transparent text-sm font-semibold text-gray-800 focus:outline-none italic',
	button:
		'bg-[#6649A6] h-7 px-3 rounded-xl text-white text-xs font-bold tracking-widest',
};

export default function NewsLetter() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.flexBox}>
					<RiEmotionSadLine className='text-4xl text-gray-500 ' />
					<p className={styles.text}>
						Oh no! This must be the end... <br />
					</p>
				</div>
				<div className={styles.flexBox}>
					<p className={styles.text}>
						Come back later or join our newsletter
					</p>
					<TbCornerRightDown className='text-xl mt-2 text-gray-500' />
				</div>

				<div className={styles.searchBox}>
					<div className='flex items-center'>
						<FiSearch className='text-xl text-gray-500 mr-2' />
						<input
							type='email'
							placeholder='enter your email address'
							className={styles.input}
						/>
					</div>
					<button type='submit' className={styles.button}>
						Join
					</button>
				</div>

				<div className={styles.flexBox}>
					<p className={styles.text2}>
						"and let us notify you about our new stories"
					</p>
				</div>
			</div>
		</>
	);
}
