<template>
  <section class="single-book">
      <h1>{{book.title}}</h1>
    <div>
        <img :src="book.img" class="book-img" :alt="book.title">
    </div>
    <p>Autor: {{book.author}}</p>
    <p>Opis: {{book.description}}</p>
  </section>
</template>

<script>
export default {
  computed: {
    book () {
      return this.$store.state.books[this.$route.params.id - 1]
    }
  }
}
</script>
