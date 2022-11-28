import Author from './Author';

const styles = {
	container:
		'w-full md:p-4 flex flex-col items-center sm:mb-0 mb-4 first:md:flex-row first:md:justify-between first:md:col-span-2 first:lg:col-span-3 first:md:mb-12',
	imgContainer:
		'flex-[.54] w-full h-full shadow-md shadow-gray-200 rounded-2xl',
	img: 'w-full h-[350px] rounded-2xl object-cover object-top',

	infoContainer: 'flex-[.46] w-full h-full mx-4 flex flex-col justify-between',
	title: 'font-bold text-2xl my-2',
	summary:
		'text-xs tracking-wide h-12 text-gray-500 flex items-start overflow-y-hidden',
	summaryText:
		'max-w-fit max-h-fit pr-1 leading-6 text-ellipsis overflow-hidden',
	bottomContainer: 'flex justify-between items-center mt-1',
	readButton: 'flex pr-2 sm:text-sm text-xs',
};

export default function Box({ id, title, detail, category, image, author }) {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={image} alt='sa' className={styles.img} />
			</div>

			<div className={styles.infoContainer}>
				<div>
					<div className='mt-2'>
						<span className='bg-red-200 py-1 px-2 rounded-lg'>
							<span className='text-xs text-red-700 font-semibold'>
								{category}
							</span>
						</span>
					</div>

					<div className={styles.title}>{title}</div>

					<div className={styles.summary}>
						<p className={styles.summaryText}>{detail}</p>
					</div>
				</div>

				<div className={styles.bottomContainer}>
					<Author author={author} />

					<a className={styles.readButton} href={`/stories/${id}`}>
						Read More&gt;&gt;
					</a>
				</div>

				<hr className='md:hidden mt-2' />
			</div>
		</div>
	);
}
