import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
	query getAuthors {
		authors {
			id
			name
			avatar
		}
	}
`;

export const GET_AUTHOR = gql`
	query getAuthor($id: ID!) {
		author(id: $id) {
			id
			name
			avatar
		}
	}
`;
