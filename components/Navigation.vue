<template>
  <div class="row navigator-belt">
    <div class="col-xl-2" >
      <a class="main-icons" href='/' id="potential-logo" >booksPortal</a>
    </div>
    <div class="col-xl-1" >
      <a class="main-icons" href='/' >Main</a>
    </div>
    <div class="col-xl-1">
      <a class="main-icons" href='/books'>Books</a>
    </div>
    <div class="col-xl-1" >
      <a class="main-icons" href='/favouritess' >Favourites</a>
    </div>
  </div>

</template>

  <script>
  </script>

  <style>
.navigator-belt {
  background-color: rgb(236, 236, 240);
  border: 2px solid rgba(221, 221, 228, 0.966);
  height: 60px;
}
.main-icons {
  text-decoration: none;
  color: rgba(109, 109, 109, 0.685);
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#potential-logo {
  font-size: 30px;
  color: rgba(143, 143, 146, 0.966);
  font-family: cursive;
  position: absolute;
}
.main-icons:hover {
  text-decoration: none;
  color: black;
}
</style>
