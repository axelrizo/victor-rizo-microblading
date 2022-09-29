<template>
  <div>
    <swiper class="mySwiper">
      <swiper-slide class="h-20">
        Slide 1
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 2
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 3
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 4
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 5
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 6
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 7
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 8
      </swiper-slide>
      <swiper-slide class="h-20">
        Slide 9
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

SwiperCore.use([Navigation, Pagination])

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide
  }
})
</script>
