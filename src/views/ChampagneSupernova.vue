<template>
    <div>
        <h1>Search results for "champagne supernova"</h1>
        <ul id="results">
            <li v-for="result in results" :key="result.title">
                <b>Title</b>: {{result.title}} <br>
                <b>Description</b>: {{result.description}} <br>
                <b>Publish Date</b>: {{result.publishDate}} <br><br>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchResultsURL: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=champagne%20supernova&key=AIzaSyAslO2dlQqyqt4kcj1kt3ARbHRUiD8A7mQ',
            results: []
        }
    },

    mounted: function() {
        axios.get(this.searchResultsURL).then( response => {
            response.data.items.forEach(element => 
            this.results.push({'title': element.snippet.title, 'description': 
            element.snippet.description, 'publishDate': element.snippet.publishedAt}));
        })
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

#results {
    text-align: left;
}
</style>