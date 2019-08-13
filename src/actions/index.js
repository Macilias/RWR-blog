import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
	console.log('fetchPosts action called')
	// const promise = jsonPlaceholder.get('/posts');
	return {
		type: 'RETCH_POSTS'
	};
};
