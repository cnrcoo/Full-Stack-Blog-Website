import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: { type: String },
	detail: { type: String },
	category: {
		type: String,
		enum: ['cheerful', 'melancholy', 'gloomy', 'romantic'],
	},
	image: { type: String },
	authorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Author',
	},
});

export default mongoose.model('Post', PostSchema);
