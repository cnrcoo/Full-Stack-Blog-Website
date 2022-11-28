import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_AUTHORS } from './queries/authorQueries';
import { ADD_AUTHOR } from './mutations/authorMutations';

export default function AddAuthorModal() {
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');

	const [addAuthor] = useMutation(ADD_AUTHOR, {
		variables: { name, avatar },
		update(cache, { data: { addAuthor } }) {
			const { authors } = cache.readQuery({ query: GET_AUTHORS });

			cache.writeQuery({
				query: GET_AUTHORS,
				data: { authors: [...authors, addAuthor] },
			});
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (name === '' || avatar === '') {
			return alert('Please fill in all the fields!');
		}
		addAuthor(name, avatar);

		setName('');
		setAvatar('');
	};

	return (
		<>
			<div className='w-full bg-gray-200'>
				<div className='max-w-screen-lg mx-auto px-6 py-4'>
					<div className='font-semibold sm:font-bold mb-4'>Add Author</div>
					<form
						onSubmit={onSubmit}
						className='block sm:flex justify-start items-center'
					>
						<div className=''>
							<label className='mr-1 text-sm font-semibold'>Name:</label>
							<input
								type='text'
								id='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='my-4 sm:my-0 mx-0 sm:mx-4'>
							<label className='mr-1 text-sm font-semibold'>
								Avatar:
							</label>
							<input
								type='text'
								id='avatar'
								value={avatar}
								onChange={(e) => setAvatar(e.target.value)}
							/>
						</div>

						<div className=''>
							<button
								type='submit'
								className='text-sm font-bold bg-blue-100 p-2 rounded-xl'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
