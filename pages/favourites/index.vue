<template>
<div>
      <h1>Ulubione książki</h1>
  <div class="books-container"> 
        <Book
            v-for="book in this.$store.state.books" v-if= book.isFav
            :key="book.id"
            :img="book.img"
            :title="book.title"
            :description="book.description"
            :id="book.id"
            :isFav="book.isFav"
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

