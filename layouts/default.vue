<template> <!--this layout is just for checking results, this correct one is contained in previous task-->
  <div>
      <div class="wrapper">
    <nuxt-link :to="'/' ">
      <div class="main-page">HOME</div>
    </nuxt-link>
  <nuxt-link :to="'/books' ">
      <div class="all-books">BOOKS</div>
    </nuxt-link>

  <nuxt-link :to="'/favourites' ">
    <div class="favourites">FAVOURITES</div>
  </nuxt-link>
  </div >
    <nuxt/>    
  </div>
</template>

