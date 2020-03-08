<template>
	<div class="home">
		<h1 class="heading">Categories</h1>
		
		<div id="categories">
			<div id="city_category" class="category">
				<img src="../assets/city1.jpg" alt="city picture" class="category_image">
				<br>
				<router-link to="/CityPictures">Cities</router-link>
			</div>

			<div id="nature_category" class="category">
				<img src="../assets/nature1.jpg" alt="nature picture" class="category_image">
				<br>
				<router-link to="/CityPictures">Nature</router-link>
			</div>

			<div class="category">
				<img src="../assets/golden_spiral.jpg" alt="golden spiral" class="category_image">
				<br>
				<router-link to="/CityPictures">Math</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {
		
	}
}
</script>

<style scoped>
	.category_image {
		width: 200px
	}
</style>
