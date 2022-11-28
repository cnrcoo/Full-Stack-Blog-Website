const styles = {
	authorContainer: 'flex items-end items-center',
	avatar: 'w-8 h-8 mr-2 rounded-lg opacity-90',
	author: 'text-xs sm:text-sm capitalize text-gray-500',
};

export default function Author({ author }) {
	return (
		<div className={styles.authorContainer}>
			<img src={author.avatar} alt='avatar' className={styles.avatar} />
			<div className={styles.author}>{author.name}</div>
		</div>
	);
}
