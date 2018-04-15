<template>
    <div class="single-book">
      <button class="fav-button" @click="favouritesEngine"></button>
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
      isFavourite: false
    }
  },
  props: ['title', 'author', 'description', 'img', 'id', 'nrFav'],
  methods: {
    addFavourite () {
      this.$store.state.favouritesBooks.push({
        id: this.id,
        title: this.title,
        description: this.description,
        img: this.imageLinks ? this.imageLinks.thumbnail : 'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        author: this.authors ? this.authors[0] : 'Unknown',
        nrFav: this.nrFav // nrFav is needly to deleting books from favourites list
      })
    },
    deleteFavourite () {
      this.$delete(this.$store.state.favouritesBooks, this.nrFav)
    },
    favouritesEngine () {
      for (var i = 0; i < this.$store.state.favouritesBooks.length; i++) {
        if (this.title === this.$store.state.favouritesBooks[i].title) {
          this.deleteFavourite()
          return
        }
      }
      this.addFavourite()
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
