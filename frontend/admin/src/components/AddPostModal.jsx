import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from './mutations/postMutations';
import { GET_POSTS } from './queries/postQueries';

const styles = {
	label: 'text-sm font-semibold',
	input: 'w-full mb-3 py-1 pl-2 rounded-lg',
	textarea: 'w-full h-48 p-2 rounded-lg',
	button: 'p-2 mt-2 sm:mt-0 bg-green-600 rounded-xl font-bold text-gray-50 ',
};

export default function AddPostModal() {
	const [title, setTitle] = useState('');
	const [detail, setDetail] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');
	const [authorId, setAuthorId] = useState('');

	const [addPost] = useMutation(ADD_POST, {
		variables: { title, detail, category, image, authorId },
		update(cache, { data: { addPost } }) {
			const { posts } = cache.readQuery({ query: GET_POSTS });

			cache.writeQuery({
				query: GET_POSTS,
				data: { posts: [...posts, addPost] },
			});
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			title === '' ||
			detail === '' ||
			category === '' ||
			category === 'default' ||
			image === '' ||
			authorId === ''
		) {
			return alert('Please fill in all the fields!');
		}
		addPost(title, detail, category, image, authorId);

		setTitle('');
		setDetail('');
		setCategory('');
		setImage('');
		setAuthorId('');
	};

	return (
		<>
			<div className='w-full mt-2 bg-gray-200'>
				<div className='max-w-screen-lg mx-auto px-6 py-4'>
					<div className='font-semibold sm:font-bold mb-4'>
						Add New Post
					</div>
					<form
						onSubmit={onSubmit}
						className='block sm:flex justify-start items-center'
					>
						<div className='w-full sm:flex items-center'>
							<div className='mr-4 w-full flex-1'>
								<div className={styles.label}>Title</div>
								<input
									type='text'
									id='title'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className={styles.input}
								/>

								<div className={styles.label}>Image Url</div>
								<input
									type='text'
									id='image'
									value={image}
									onChange={(e) => setImage(e.target.value)}
									className={styles.input}
								/>

								<div className={styles.label}>Author Id</div>
								<input
									type='text'
									id='authorId'
									value={authorId}
									onChange={(e) => setAuthorId(e.target.value)}
									className={styles.input}
								/>

								<div className={styles.label}>Category</div>
								<select
									onChange={(e) => setCategory(e.target.value)}
									id='category'
									value={category}
									className={styles.input}
								>
									<option value='default'></option>
									<option value='cheerful'>cheerful</option>
									<option value='melancholy'>melancholy</option>
									<option value='gloomy'>gloomy</option>
									<option value='romantic'>romantic</option>
								</select>
							</div>

							<div className='flex-1 sm:mr-3 h-full'>
								<div className={styles.label}>Detail</div>
								<textarea
									className={styles.textarea}
									type='text'
									id='detail'
									value={detail}
									onChange={(e) => setDetail(e.target.value)}
								/>
							</div>

							<div>
								<button type='submit' className={styles.button}>
									Send Post
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
