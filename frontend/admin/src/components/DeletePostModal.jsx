import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from './mutations/postMutations';
import { GET_POSTS } from './queries/postQueries';

export default function DeletePostModal({ post }) {
	const [deletePost] = useMutation(DELETE_POST, {
		variables: { id: post.id },
		update(cache, { data: { deletePost } }) {
			const { posts } = cache.readQuery({ query: GET_POSTS });
			cache.writeQuery({
				query: GET_POSTS,
				data: {
					posts: posts.filter((author) => author.id !== deletePost.id),
				},
			});
		},
	});

	return (
		<button className='px-3' onClick={deletePost}>
			<FaTrash color='#dd0000' size={16} />
		</button>
	);
}
