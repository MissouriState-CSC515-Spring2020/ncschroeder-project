<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<h3 v-if="isOffline">You're offline but this website still works</h3>
		</div>
		<router-view/>
	</div>
</template>

<style>
body {
	color: black;
	background-color: deepskyblue;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	text-align: center;
}
</style>
