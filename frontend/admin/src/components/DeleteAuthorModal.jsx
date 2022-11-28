import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_AUTHOR } from './mutations/authorMutations';
import { GET_AUTHORS } from './queries/authorQueries';

export default function DeleteAuthorModal({ author }) {
	const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
		variables: { id: author.id },
		update(cache, { data: { deleteAuthor } }) {
			const { authors } = cache.readQuery({ query: GET_AUTHORS });
			cache.writeQuery({
				query: GET_AUTHORS,
				data: {
					authors: authors.filter(
						(author) => author.id !== deleteAuthor.id
					),
				},
			});
		},
	});

	return (
		<button onClick={deleteAuthor}>
			<FaTrash color='#dd0000' />
		</button>
	);
}
