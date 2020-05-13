<template>
	<div id="ibx2cat">
		<h1>ibx2cat's uploads</h1>
		<ul id="uploads">
			<li v-for="video in videos" :key="video.title">
				<b>Title</b>: {{video.title}} <br>
				<b>Description</b>: {{video.description}} <br>
				<b>Publish Date</b>: {{video.publishDate}} <br><br>
			</li>
		</ul>
	</div>
</template>

// API key is AIzaSyAslO2dlQqyqt4kcj1kt3ARbHRUiD8A7mQ
<script>
import axios from 'axios';
export default {
	name: 'ibx2cat',
	data() {
		return {
		ibx2catPlaylistURL: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUJVnko6tQ56PYB5BNNChPGg&key=AIzaSyAslO2dlQqyqt4kcj1kt3ARbHRUiD8A7mQ',
		videos: []
		}
	},

	mounted: function() {
		axios.get(this.ibx2catPlaylistURL).then( response => {
			response.data.items.forEach(element => 
			this.videos.push({'title': element.snippet.title, 
				'description': element.snippet.description, 'publishDate': 
				element.snippet.publishedAt}));
		});	
	}
}
</script>

<style scoped>
ul {
	list-style-type: none;
}

#uploads {
	text-align: left;
}
</style>