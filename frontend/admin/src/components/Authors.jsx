import { useQuery } from '@apollo/client';
import DeleteAuthorModal from './DeleteAuthorModal';
import { GET_AUTHORS } from './queries/authorQueries';

export default function Authors() {
	const { loading, error, data } = useQuery(GET_AUTHORS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something Went Wrong</p>;

	return (
		<div className='w-full max-w-screen-lg mx-auto p-6'>
			<div className='text-2xl font-bold tracking-wide'>Authors</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{data.authors.map((author) => (
					<div
						key={author.id}
						className='flex relative justify-center items-center w-full h-24 bg-gray-50 rounded-lg p-4'
					>
						<img
							src={author.avatar}
							alt='img'
							className='w-12 h-12 mr-2 rounded-xl'
						/>

						<div className='px-3'>
							<div className='font-semibold'>@{author.name}</div>
							<div className='italic text-xs text-gray-400'>
								-additional author info-
							</div>
						</div>

						<div>
							<DeleteAuthorModal author={author} />
						</div>

						<div className='absolute bottom-0 text-xs font-light text-gray-400'>
							id: {author.id}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
