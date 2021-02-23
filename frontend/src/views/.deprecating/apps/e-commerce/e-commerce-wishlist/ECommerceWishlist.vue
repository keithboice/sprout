<template>
  <section class="grid-view wishlist-items">
    <b-card v-for="product in products" :key="product.id" class="ecommerce-card" no-body>
      <div class="item-img text-center">
        <b-link :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.slug } }">
          <b-img :alt="`${product.name}-${product.id}`" :src="product.image" class="card-img-top" fluid />
        </b-link>
      </div>
      
      <!-- Product Details -->
      <b-card-body>
        <div class="item-wrapper">
          <div class="item-rating">
            <ul class="unstyled-list list-inline">
              <li v-for="star in 5" :key="star" :class="{'ml-25': star-1}" class="ratings-list-item">
                <feather-icon :class="[{'fill-current': star <= product.rating}, star <= product.rating ? 'text-warning' : 'text-muted']" icon="StarIcon" size="16" />
              </li>
            </ul>
          </div>
          <div>
            <h6 class="item-price">
              ${{ product.price }} </h6>
          </div>
        </div>
        <h6 class="item-name">
          <b-link :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.slug } }" class="text-body">
            {{ product.name }}
          </b-link>
          <b-card-text class="item-company">
            By
            <b-link class="ml-25">
              {{ product.brand }}
            </b-link>
          </b-card-text>
        </h6>
        <b-card-text class="item-description">
          {{ product.description }}
        </b-card-text>
      </b-card-body>
      
      <!-- Action Buttons -->
      <div class="item-options text-center">
        <b-button class="btn-wishlist remove-wishlist" variant="light" @click="removeProductFromWishlistClick(product)">
          <feather-icon icon="XIcon" />
          <span>Remove</span>
        </b-button>
        <b-button class="btn-cart move-cart" variant="primary" @click="handleWishlistCartActionClick(product, removeProductFromWishlistClick)">
          <feather-icon class="mr-50" icon="ShoppingCartIcon" />
          <span>{{ product.isInCart ? "View In Cart" : "Move to Cart" }}</span>
        </b-button>
      </div>
    </b-card>
  </section>
</template>

<script>
import { BCard, BCardBody, BImg, BCardText, BLink, BButton } from "bootstrap-vue"
import store                                                 from "@/store"
import { ref }                                               from "@vue/composition-api"
import { useEcommerce, useEcommerceUi }                      from "../useEcommerce"


export default {
  components: {
    BCard,
    BCardBody,
    BImg,
    BCardText,
    BLink,
    BButton
  },
  setup () {
    const { handleWishlistCartActionClick } = useEcommerceUi()
    
    const products = ref( [] )
    
    const { removeProductFromWishlist } = useEcommerce()
    const removeProductFromWishlistClick = product => {
      removeProductFromWishlist( product.id )
        .then( () => {
          const productIndex = products.value.findIndex( p => p.id === product.id )
          products.value.splice( productIndex, 1 )
        } )
    }
    
    const fetchWishlistProducts = () => {
      store.dispatch( "app-ecommerce/fetchWishlistProducts" )
        .then( response => {
          products.value = response.data.products
        } )
    }
    
    fetchWishlistProducts()
    
    return {
      products,
      
      // UI
      handleWishlistCartActionClick,
      removeProductFromWishlistClick
    }
  }
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>
