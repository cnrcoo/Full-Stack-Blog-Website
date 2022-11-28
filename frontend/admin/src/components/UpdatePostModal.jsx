import { GoSettings } from 'react-icons/go';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from './mutations/postMutations';
import { GET_POST } from './queries/postQueries';

export default function UpdatePostModal({ post }) {
	const [showModal, setShowModal] = useState(false);
	const [title, setTitle] = useState(post.title);
	const [detail, setDetail] = useState(post.detail);
	const [image, setImage] = useState(post.image);

	const [updatePost] = useMutation(UPDATE_POST, {
		variables: { id: post.id, title, detail, image },
		refetchQueries: [{ query: GET_POST, variables: { id: post.id } }],
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if ((title === '', detail === '', image === '')) {
			return alert('Please fill out all fields!');
		}

		updatePost(title, detail, image);
		setShowModal(false);
	};

	const reset = () => {
		setTitle(post.title);
		setDetail(post.detail);
		setImage(post.image);

		setShowModal(false);
	};

	return (
		<>
			<button
				className='outline-none px-3'
				type='button'
				onClick={() => setShowModal(true)}
			>
				<GoSettings color='#ffa500' size={22} />
			</button>
			{showModal ? (
				<>
					<div className='sm:w-[80%] w-[95%] mx-auto justify-center items-center flex fixed inset-0 z-50'>
						<div className='relative w-full my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='p-4 border-b border-slate-200 text-3xl font-semibold'>
									Update Post
								</div>

								{/*body*/}
								<div className='relative p-6 flex-auto'>
									<form
										className='my-4 text-slate-500 text-lg leading-relaxed'
										onSubmit={onSubmit}
									>
										<div className=''>
											<div className=''>Title</div>
											<input
												className='border-2 w-full border-gray-400'
												type='text'
												value={title}
												onChange={(e) => {
													setTitle(e.target.value);
												}}
											/>
										</div>

										<div className=''>
											<div className=''>Image</div>
											<input
												className='border-2 w-full border-gray-400'
												type='text'
												value={image}
												onChange={(e) => {
													setImage(e.target.value);
												}}
											/>
										</div>

										<div className=''>
											<div className=''>Detail</div>
											<textarea
												className='border-2 w-full border-gray-400'
												type='text'
												value={detail}
												onChange={(e) => {
													setDetail(e.target.value);
												}}
											/>
										</div>

										<div className='flex items-center justify-end p-6 border-t border-slate-200'>
											<button
												className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 '
												type='button'
												onClick={reset}
											>
												Close
											</button>

											<button
												className='bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150'
												type='submit'
											>
												Save Changes
											</button>
										</div>
									</form>
								</div>

								{/*footer*/}
							</div>
						</div>
					</div>

					<div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
}
