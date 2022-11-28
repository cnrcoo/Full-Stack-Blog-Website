// Imports
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import schema from './schema/schema.js';
import dotevn from 'dotenv';
dotevn.config();

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

// DB Config
mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: false,
});

// API ENDPOINTS

// Listener
app.listen(port, console.log('Listening on port:', port));
