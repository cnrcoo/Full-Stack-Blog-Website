import Box from './Box';
import { GET_POSTS } from './queries/postQueries';
import { useQuery } from '@apollo/client';

const styles = {
	container: 'w-full max-w-screen-xl px-4 md:mt-12 mt-4 xl:mt-4 mx-auto',
	grid: 'grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 sm:gap-4 gap-y-20',
};

export default function Stories() {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something Went Wrong</p>;

	return (
		<>
			{!loading && !error && (
				<div className={styles.container}>
					<div className={styles.grid}>
						{data.posts.map((post) => (
							<Box
								key={post.id}
								id={post.id}
								title={post.title}
								detail={post.detail}
								category={post.category}
								image={post.image}
								author={post.author}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
}
