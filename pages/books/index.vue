<template>
<div>
      <h1>Książki</h1>
  <div class="books-container">
        <Book
            v-for="book in $store.state.books"
            :key="book.id"
            :img="book.img"
            :title="book.title"
            :description="book.description"
            :id="book.id"
            
        />
  </div>
</div>

</template>

<script>
import Book from '@/components/Book'
import 'isomorphic-fetch'
export default {
  components: {
    Book
  },
  data: function () {
    return {

    }
  },
  methods: {
    transform (bookItem, index) {
      const book = bookItem.volumeInfo
      return {
        id: index + 1,
        title: book.title,
        description: book.description,
        img: book.imageLinks ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        author: book.authors ? book.authors[0] : 'Unknown',
        isFav: false
      }
    },
    getBooks () {
      const query = 'knit'
      return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if (this.$store.state.books.length === 0) {
            this.$store.state.books = result.items ? result.items.map(this.transform) : []
          }
        })
    }
  },
  created () {
    this.getBooks()
  }
}
</script>

<style scoped>
.books-container {
  display: flex;
}
</style>

