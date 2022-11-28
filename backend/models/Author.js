import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
	name: { type: String },
	avatar: { type: String },
});

export default mongoose.model('Author', AuthorSchema);
