<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <NuxtLayout>
      <!-- shape -->
      <img alt="shape" src="assets/img/Frame 10.png"
          class="absolute z-1 top-0 right-0 ltr:left-0 ltr:right-auto ltr:[transform:rotateY(180deg)]">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} || گروه ام اس` : 'گروه ام اس'
    }
  })
</script>
