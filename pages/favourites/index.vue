<template>
<div>
      <h1>Książki</h1>
  <div class="books-container"> 
        <Book
            v-for="(book,index) in $store.state.favouritesBooks"
            :key="book.id"
            :img="book.img"
            :title="book.title"
            :description="book.description"
            :id="book.id"
            :nrFav="index" 
        />
  </div>
</div>

</template>

<script>
import Book from '@/components/Book'
export default {
  components: {
    Book
  }
}
</script>

<style scoped>
.books-container {
  display: flex;
}
</style>

