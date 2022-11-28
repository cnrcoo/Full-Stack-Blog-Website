import { gql } from '@apollo/client';

export const ADD_POST = gql`
	mutation addPost(
		$title: String!
		$detail: String!
		$category: PostCategory!
		$image: String!
		$authorId: ID!
	) {
		addPost(
			title: $title
			detail: $detail
			category: $category
			image: $image
			authorId: $authorId
		) {
			id
			title
			detail
			category
			image
			author {
				id
				name
				avatar
			}
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}
`;

export const UPDATE_POST = gql`
	mutation updatePost(
		$id: ID!
		$title: String!
		$detail: String!
		$image: String!
	) {
		updatePost(id: $id, title: $title, detail: $detail, image: $image) {
			id
			title
			detail
		}
	}
`;
