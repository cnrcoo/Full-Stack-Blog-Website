import { gql } from '@apollo/client';

export const ADD_AUTHOR = gql`
	mutation addAuthor($name: String!, $avatar: String!) {
		addAuthor(name: $name, avatar: $avatar) {
			id
			name
			avatar
		}
	}
`;

export const DELETE_AUTHOR = gql`
	mutation deleteAuthor($id: ID!) {
		deleteAuthor(id: $id) {
			id
		}
	}
`;

export const UPDATE_AUTHOR = gql`
	mutation updateAuthor($id: ID!, $name: String!, $avatar: String!) {
		updateAuthor(id: $id, name: $name, avatar: $avatar) {
			id
			name
			avatar
		}
	}
`;
