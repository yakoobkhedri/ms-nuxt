<template>
  <div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination,SwiperNavigation]"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :loop="true"
      :autoplay="{
        delay: 3000,
      }"
      :pagination="pagination"
      :navigation="navigation"
      :breakpoints="breakpoints"
    >
      <slot></slot>
    </Swiper>
  </div>
</template>

<script setup>
 
 const props = defineProps({
   slidesPerView:{
    type : Number,
    default: 1,
   },
   spaceBetween:{
    type : Number,
    default: 10
   },
   pagination:{
    type : Object,
    default: ()=> ({ clickable: true })
   },
   navigation: {
    type : Boolean,
    default : true
   },
   breakpoints:{
    type: Object,
    default: ()=>({
      '0': {slidesPerView: 1},
      '576': {slidesPerView: 2},
      '992': {slidesPerView: 3},
      '1200': {slidesPerView: 4},
    })
   }
 })

</script>

<style>
</style>