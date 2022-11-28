import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../queries/postQueries';
import Author from '../Author';

const styles = {
	container: 'mt-16 px-4 py-8 w-full max-w-screen-lg mx-auto',
	topContainer: 'lg:flex flex-col-reverse justify-between',
	image: 'flex-1 max-h-[500px] w-full object-cover rounded-xl drop-shadow  mx-auto',
	horizontalLine: 'w-full h-1 bg-gray-200 my-2',
	titleContainer: 'flex-1 flex justify-between items-center',
	title: 'title text-2xl font-bold flex-[.8]',
	author: 'flex-[.2] flex justify-end',
	detail: 'my-6 font-semibold tracking-wide',
	backButton: 'bg-gray-200 p-4 mt-6 text-sm font-bold italic rounded-xl',
};

export default function StoryPage() {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_POST, {
		variables: { id },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something went wrong...</p>;

	return (
		<>
			{!loading && !error && (
				<div className=''>
					<div className={styles.container}>
						<div className={styles.topContainer}>
							<img
								src={data.post.image}
								alt='storyImg'
								className={styles.image}
							/>

							<div className={styles.horizontalLine}></div>

							<div className={styles.titleContainer}>
								<div className={styles.title}>{data.post.title}</div>
								<div className={styles.author}>
									<Author author={data.post.author} />
								</div>
							</div>
						</div>

						<div className={styles.detail}>{data.post.detail}</div>

						<Link className={styles.backButton} to='/'>
							Go Back
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
