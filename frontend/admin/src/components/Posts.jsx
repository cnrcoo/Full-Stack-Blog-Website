import { useQuery } from '@apollo/client';
import DeletePostModal from './DeletePostModal';
import { GET_POSTS } from './queries/postQueries';
import UpdatePostModal from './UpdatePostModal';

export default function Posts() {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something Went Wrong</p>;

	return (
		<div className='w-full max-w-screen-lg mx-auto p-6'>
			<div className='text-2xl font-bold tracking-wide'>Posts</div>

			<table className='table-fixed w-full mt-4'>
				<thead className='w-full text-start border-b-2 border-b-black'>
					<tr>
						<th className='text-start'>#</th>
						<th className='text-start sm:px-4'>Title</th>
						<th className='text-start'>Category</th>
						<th className='text-start sm:px-4'>Author</th>
						<th className='text-start'></th>
					</tr>
				</thead>

				<tbody>
					{data.posts.map((post, index) => (
						<tr
							key={post.id}
							className='last:border-b-0 border-b-[1px] border-b-black text-sm font-semibold items-center'
						>
							<td className='py-2'>{index + 1}</td>
							<td className='sm:px-4'>{post.title}</td>
							<td>{post.category}</td>
							<td className='sm:px-4'>{post.author.name}</td>
							<td className='sm:px-4 items-center'>
								<div className='flex'>
									<UpdatePostModal post={post} />
									<DeletePostModal post={post} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
