<template>
  <div class="back h-12 fixed top-0 left-0 w-full bg-white z-50 px-12 py-2">
    <div class="h-full bg-white rounded-full p-0.5 inline-block">
      <i style="font-size:1.3rem" class="iconfont float-left pl-3 pt-1">&#xe612;</i>
      <input
        placeholder="618 精选好物"
        class="h-7 focus:outline-none pl-1 text-sm bg-white inline-block"
      />
      <i style="font-size:1.3rem" class="iconfont float-right pr-3 pt-0.5">&#xe663;</i>
    </div>
    <i style="font-size:1.5rem" class="iconfont absolute top-2.5 right-3">&#xe635;</i>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Top'
})
</script>

<style scoped>
.back {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #cce2ff;
  --tw-gradient-stops: var(--tw-gradient-from), #ede9fe, var(--tw-gradient-to, rgba(237, 233, 254, 0));
  --tw-gradient-stops: var(--tw-gradient-from), #e1daff, var(--tw-gradient-to, rgba(196, 181, 253, 0));
  --tw-gradient-to: #ffd7ee;
}
</style>
