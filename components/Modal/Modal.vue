<template>
  <transition name="modal-animation">
    <div v-show="modalActive">
      <transition name="modal-animation-inner">
        <div class="py-4 relative">
          <button
            @click="emits('closeModal')"
            type="button"
            class="ltr:mr-auto rtl:ml-3 ltr:ml-3 rtl:mr-auto absolute rtl:left-0 ltr:right-0 top-3"
          ></button>
          <!-- modal content -->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  modalActive: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['closeModal'])
</script>

<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
</style>