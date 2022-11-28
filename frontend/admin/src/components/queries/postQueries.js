import { gql } from '@apollo/client';

export const GET_POSTS = gql`
	query getPosts {
		posts {
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

export const GET_POST = gql`
	query getPost($id: ID!) {
		post(id: $id) {
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
