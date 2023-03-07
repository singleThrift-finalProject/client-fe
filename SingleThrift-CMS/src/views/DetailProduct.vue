<script>
import { ref } from "vue";
import { MDBCarousel } from "mdb-vue-ui-kit";
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/counter";

export default {
  data() {
    return {
      items1: [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
          alt: "...",
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
          alt: "...",
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
          alt: "...",
        },
      ],
      carousel1: ref(0),
    };
  },
  computed: {
    ...mapState(useAppStore, ["detailProduct"]),
  },
  methods: {
    ...mapActions(useAppStore, ["getDetailProduct"]),
    getDetail(id) {
      this.getDetailProduct(id);
    },
  },
  watch: {
    detailProduct(newDetail) {
      if (newDetail) {
        this.items1 = newDetail.Images.map((perData) => {
          return { src: perData.imageUrl, alt: "..." };
        });
      }
    },
  },
  created() {
    this.getDetail(this.$route.params.id);
  },
  components: { MDBCarousel },
};
</script>

<template>
<section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
      <MDBCarousel v-model="this.carousel1" :items="this.items1" fade />
        </div>
        <div class="col-md-6">
          <h1 class="">Name: {{ detailProduct.name }}</h1>
          <div class="small mb-1">Description: {{ detailProduct.description }}</div>
          <p class="lead"> Category: {{ detailProduct.Category.name }}
         </p>
        </div>
        <a
          @click.prevent="$router.push('/products')"
          class="btn btn-outline-dark mt-5"
        >
          Back
        </a>
      </div>
    </div>
  </section>
</template>