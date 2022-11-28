import { SearchBar } from '.';

const styles = {
	container: 'w-full h-[40vh] bgImage',
	innerContainer: 'w-full max-w-screen-xl mx-auto  mt-16 px-4 pt-14 flex-row',
	title: 'sm:text-4xl text-3xl font-bold text-center handWritten text-[#6649A6]',
	title2:
		'text-4xl font-bold tracking-widest text-center pt-2 handWritten text-[#BF5A7F]',
	desc: 'text-center text-sm py-6 px-10 font-semibold max-w-sm mx-auto opacity-70 text-[#402232]',
};

export default function Welcome() {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<p className={styles.title}>Best Stories For Your </p>
				<p className={styles.title2}>"Mood"</p>

				<p className={styles.desc}>
					storyline brings you the best possible stories, based on your
					mood.
				</p>

				<SearchBar />
			</div>
		</div>
	);
}
