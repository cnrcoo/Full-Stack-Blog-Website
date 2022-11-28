// Imports
import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
	GraphQLEnumType,
} from 'graphql';
import Post from '../models/Post.js';
import Author from '../models/Author.js';

// Post Type
const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		detail: { type: GraphQLString },
		category: { type: GraphQLString },
		image: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				return Author.findById(parent.authorId);
			},
		},
	}),
});

// Author Type
const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		avatar: { type: GraphQLString },
	}),
});

// Queries
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		// Get All Posts
		posts: {
			type: new GraphQLList(PostType),

			resolve(parents, args) {
				return Post.find();
			},
		},

		// Get Post By Id
		post: {
			type: PostType,
			args: { id: { type: GraphQLID } },

			resolve(parents, args) {
				return Post.findById(args.id);
			},
		},

		// Get All Authors (optional)
		authors: {
			type: new GraphQLList(AuthorType),

			resolve(parents, args) {
				return Author.find();
			},
		},

		// Get Author By Id
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },

			resolve(parents, args) {
				return Author.findById(args.id);
			},
		},
	},
});

// Mutations
const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		// Add Author
		addAuthor: {
			type: AuthorType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				avatar: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parents, args) {
				const author = new Author({
					name: args.name,
					avatar: args.avatar,
				});

				return author.save();
			},
		},

		// Delete Author
		deleteAuthor: {
			type: AuthorType,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve(parents, args) {
				return Author.findByIdAndRemove(args.id);
			},
		},

		// Update Author Avatar
		updateAuthor: {
			type: AuthorType,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
				name: { type: GraphQLString },
				avatar: { type: GraphQLString },
			},
			resolve(parents, args) {
				return Author.findByIdAndUpdate(
					args.id,
					{
						$set: {
							name: args.name,
							avatar: args.avatar,
						},
					},
					{ new: true }
				);
			},
		},

		// Add Post
		addPost: {
			type: PostType,
			args: {
				title: { type: GraphQLNonNull(GraphQLString) },
				detail: { type: GraphQLNonNull(GraphQLString) },
				category: {
					type: new GraphQLEnumType({
						name: 'PostCategory',
						values: {
							cheerful: { value: 'cheerful' },
							melancholy: { value: 'melancholy' },
							gloomy: { value: 'gloomy' },
							romantic: { value: 'romantic' },
						},
					}),
				},
				image: { type: GraphQLNonNull(GraphQLString) },
				authorId: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve(parents, args) {
				const post = new Post({
					title: args.title,
					detail: args.detail,
					category: args.category,
					image: args.image,
					authorId: args.authorId,
				});

				return post.save();
			},
		},

		// Delete Post
		deletePost: {
			type: PostType,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve(parents, args) {
				return Post.findByIdAndRemove(args.id);
			},
		},

		// Update Post
		updatePost: {
			type: PostType,
			args: {
				id: { type: GraphQLID },
				title: { type: GraphQLString },
				detail: { type: GraphQLString },
				category: {
					type: new GraphQLEnumType({
						name: 'PostCategoryUpdate',
						values: {
							cheerful: { value: 'cheerful' },
							melancholy: { value: 'melancholy' },
							gloomy: { value: 'gloomy' },
							romantic: { value: 'romantic' },
						},
					}),
				},
				image: { type: GraphQLString },
			},
			resolve(parents, args) {
				return Post.findByIdAndUpdate(
					args.id,
					{
						$set: {
							title: args.title,
							detail: args.detail,
							category: args.category,
							image: args.image,
						},
					},
					{ new: true }
				);
			},
		},
	},
});

// Export
export default new GraphQLSchema({
	query: RootQuery,
	mutation: mutation,
});
