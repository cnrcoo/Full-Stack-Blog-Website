import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AddAuthorModal from './components/AddAuthorModal';
import AddPostModal from './components/AddPostModal';
import Authors from './components/Authors';
import Posts from './components/Posts';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				authors: {
					merge(existing, incoming) {
						return incoming;
					},
				},

				posts: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:8001/graphql',
	cache: cache,
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<AddAuthorModal />
				<Authors />

				<hr />

				<AddPostModal />
				<Posts />
			</ApolloProvider>
		</>
	);
}

export default App;
