<template>
  <header class="bg-dark py-5 bg-image">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <div class="display-4 fw-bolder h1">{{ headline }}</div>
        <p class="lead fw-normal text-white mb-0">
          {{ subline }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "featureHeaderTwo",
  props: {
    headline: String,
    subline: String,
  },
};
</script>


<style scoped>
.h1 {
  color: #fff;
}

.bg-image {
  min-height: 400px;
  background-image: url("/assets/images/featureHeader/kletterausrüstung.webp");
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>