<template>
    <div class="single-book">
      <button class="fav-button" @click="addFavourite"></button>
      <nuxt-link :to="'/books/' + id">
            <h2>{{title}}</h2>
            <p>{{author}}</p>
            <p>{{description}}</p>
            <div class="book-img" :style="{backgroundImage: 'url('+ img +')'}"></div>
      </nuxt-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['title', 'author', 'description', 'img', 'id', 'isFav'],
  methods: {
    addFavourite () {
      this.$store.state.books[this.id - 1].isFav = (this.$store.state.books[this.id - 1].isFav === 1) ? 0 : 1
      console.log(this.$store.state.books[this.id - 1])
    }
  }
}
</script>

<style scoped>
.single-book {
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 280px;
  border: 1px solid #ccc;
  margin: 10px;
}
.book-img {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
.fav-button {
  width: 30px;
  height: 30px;
  background-image: url('https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png');
  background-size: 100%;
}

</style>
