import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Navbar } from './components';
import HomePage from './components/pages/HomePage';
import DummyPage from './components/pages/DummyPage';
import StoryPage from './components/pages/StoryPage';

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

const styles = {
	navbarContainer: 'w-full h-auto fixed z-50 top-0 left-0 right-0',
};

export default function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Router>
					<div className={styles.navbarContainer}>
						<Navbar />
					</div>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/dummy' element={<DummyPage />} />
						<Route path='/stories/:id' element={<StoryPage />} />
					</Routes>
				</Router>
			</ApolloProvider>
		</>
	);
}
