<template>
  <content-with-sidebar class="blog-wrapper">
    
    <!-- blogs -->
    <b-row class="blog-list-wrapper">
      <b-col
        v-for="blog in blogList"
        :key="blog.img"
        md="6"
      >
        <b-card
          no-body
          tag="article"
        >
          <b-link :to="{ name: 'pages-blog-detail', params: { id: blog.id } }">
            <b-img
              :alt="blog.img.slice(5)"
              :src="blog.img"
              class="card-img-top"
            />
          </b-link>
          <b-card-body>
            <b-card-title>
              <b-link
                :to="{ name: 'pages-blog-detail', params: { id: blog.id } }"
                class="blog-title-truncate text-body-heading"
              >
                {{ blog.title }}
              </b-link>
            </b-card-title>
            <b-media no-body>
              <b-media-aside
                class="mr-50"
                vertical-align="center"
              >
                <b-avatar
                  :src="blog.avatar"
                  href="javascript:void(0)"
                  size="24"
                />
              </b-media-aside>
              <b-media-body>
                <small class="text-muted mr-50">by</small> <small>
                  <b-link class="text-body">{{ blog.userFullName }}</b-link>
                </small> <span class="text-muted ml-75 mr-50">|</span> <small class="text-muted">{{ blog.blogPosted }}</small>
              </b-media-body>
            </b-media>
            <div class="my-1 py-25">
              <b-link
                v-for="(tag,index) in blog.tags"
                :key="index"
              >
                <b-badge
                  :variant="tagsColor(tag)"
                  class="mr-75"
                  pill
                >
                  {{ tag }}
                </b-badge>
              </b-link>
            </div>
            <b-card-text class="blog-content-truncate">
              {{ blog.excerpt }}
            </b-card-text>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
              <b-link :to="{ path: `/pages/blog/${blog.id}#blogComment`}">
                <div class="d-flex align-items-center text-body">
                  <feather-icon
                    class="mr-50"
                    icon="MessageSquareIcon"
                  />
                  <span class="font-weight-bold">{{ kFormatter( blog.comment ) }} Comments</span>
                </div>
              </b-link>
              <b-link
                :to="{ name: 'pages-blog-detail', params: { id: blog.id } }"
                class="font-weight-bold"
              >
                Read More
              </b-link>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12">
        <!-- pagination -->
        <div class="my-2">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            align="center"
            first-number
            last-number
            next-class="next-item"
            prev-class="prev-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </div>
      </b-col>
    </b-row>
    
    <!--/ blogs -->
    
    <!-- sidebar -->
    <div
      slot="sidebar"
      class="blog-sidebar py-2 py-lg-0"
    >
      <!-- input search -->
      <b-form-group class="blog-search">
        <b-input-group class="input-group-merge">
          <b-form-input
            id="search-input"
            v-model="search_query"
            placeholder="Search here"
          />
          <b-input-group-append
            class="cursor-pointer"
            is-text
          >
            <feather-icon icon="SearchIcon" />
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <!--/ input search -->
      
      <!-- recent posts -->
      <div class="blog-recent-posts mt-3">
        <h6 class="section-label mb-75">
          Recent Posts </h6>
        <b-media
          v-for="(recentpost,index) in blogSidebar.recentPosts"
          :key="recentpost.img"
          :class="index? 'mt-2':''"
          no-body
        >
          <b-media-aside class="mr-2">
            <b-link :to="{ name: 'pages-blog-detail', params:{ id :recentpost.id } }">
              <b-img
                :alt="recentpost.img.slice(6)"
                :src="recentpost.img"
                height="70"
                rounded
                width="100"
              />
            </b-link>
          </b-media-aside>
          <b-media-body>
            <h6 class="blog-recent-post-title">
              <b-link
                :to="{ name: 'pages-blog-detail', params:{ id :recentpost.id } }"
                class="text-body-heading"
              >
                {{ recentpost.title }}
              </b-link>
            </h6>
            <span class="text-muted mb-0">
              {{ recentpost.createdTime }}
            </span>
          </b-media-body>
        </b-media>
      </div>
      <!--/ recent posts -->
      
      <!-- categories -->
      <div class="blog-categories mt-3">
        <h6 class="section-label mb-1">
          Categories </h6>
        
        <div
          v-for="category in blogSidebar.categories"
          :key="category.icon"
          class="d-flex justify-content-start align-items-center mb-75"
        >
          <b-link>
            <b-avatar
              :variant="tagsColor(category.category)"
              class="mr-75"
              rounded
              size="32"
            >
              <feather-icon
                :icon="category.icon"
                size="16"
              />
            </b-avatar>
          </b-link>
          <b-link>
            <div class="blog-category-title text-body">
              {{ category.category }}
            </div>
          </b-link>
        </div>
      </div>
      <!--/ categories -->
    </div>
    <!--/ sidebar -->
  </content-with-sidebar>
</template>

<script>
import {
  BRow, BCol, BCard, BFormInput, BCardText, BCardTitle, BMedia, BAvatar, BMediaAside, BMediaBody, BImg, BCardBody, BLink, BBadge, BFormGroup,
  BInputGroup, BInputGroupAppend, BPagination
}                         from "bootstrap-vue"
import { kFormatter }     from "@core/../../../utils/filter"
import ContentWithSidebar from "@/layouts/components/content-with-sidebar/ContentWithSidebar.vue"


export default {
  components: {
    BRow,
    BCol,
    BCard,
    BFormInput,
    BCardText,
    BCardBody,
    BCardTitle,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BBadge,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BImg,
    BPagination,
    ContentWithSidebar
  },
  data () {
    return {
      search_query: "",
      blogList:     [],
      blogSidebar:  {},
      currentPage:  1,
      perPage:      1,
      rows:         140
    }
  },
  created () {
    this.$http.get( "/blog/list/data" )
      .then( res => { this.blogList = res.data } )
    this.$http.get( "/blog/list/data/sidebar" )
      .then( res => { this.blogSidebar = res.data } )
  },
  methods: {
    kFormatter,
    tagsColor ( tag ) {
      if ( tag === "Quote" ) {
        return "light-info"
      }
      if ( tag === "Gaming" ) {
        return "light-danger"
      }
      if ( tag === "Fashion" ) {
        return "light-primary"
      }
      if ( tag === "Video" ) {
        return "light-warning"
      }
      if ( tag === "Food" ) {
        return "light-success"
      }
      return "light-primary"
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';
</style>
