<template>
  <div>
    <!-- search input -->
    <section id="knowledge-base-search">
      <b-card :style="{backgroundImage: `url(${require('@images/banner/banner.png')})`}" class="knowledge-base-bg text-center" no-body>
        <b-card-body class="card-body">
          <h2 class="text-primary">
            Dedicated Source Used on Website </h2>
          <b-card-text class="mb-2">
            <span>Popular searches: </span> <span class="font-weight-bolder">Sales automation, Email marketing</span>
          </b-card-text>
          
          <!-- form -->
          <b-form class="kb-search-input">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input id="searchbar" v-model="knowledgeBaseSearchQuery" placeholder="Ask a question...." />
            </b-input-group>
          </b-form>
          <!-- form -->
        </b-card-body>
      </b-card>
    </section>
    <!--/ search input -->
    
    <section id="knowledge-base-content">
      
      <!-- content -->
      <b-row class="kb-search-content-info match-height">
        <b-col v-for="item in filteredKB" :key="item.id" class="kb-search-content" md="4" sm="6">
          <b-card :img-alt="item.img.slice(5)" :img-src="item.img" class="text-center cursor-pointer" img-top @click="$router.push({ name: 'pages-knowledge-base-category', params: { category: item.category } })">
            <h4>{{ item.title }}</h4>
            <b-card-text class="mt-1">
              {{ item.desc }}
            </b-card-text>
          </b-card>
        </b-col>
        <b-col v-show="!filteredKB.length" class="text-center" cols="12">
          <h4 class="mt-4">
            Search result not found!! </h4>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BCardBody, BForm, BInputGroup, BFormInput, BCardText, BInputGroupPrepend } from "bootstrap-vue"


export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardText,
    BForm,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput
  },
  data () {
    return {
      knowledgeBaseSearchQuery: "",
      kb:                       []
      
    }
  },
  computed: {
    filteredKB () {
      const knowledgeBaseSearchQueryLower = this.knowledgeBaseSearchQuery.toLowerCase()
      return this.kb.filter( item => item.title.toLowerCase()
                                       .includes( knowledgeBaseSearchQueryLower ) || item.desc.toLowerCase()
                                       .includes( knowledgeBaseSearchQueryLower ) )
    }
  },
  created () {
    this.$http.get( "/kb/data/knowledge_base" )
      .then( res => { this.kb = res.data } )
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-knowledge-base.scss';
</style>
