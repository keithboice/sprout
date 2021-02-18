<template>
  <div
    v-if="Object.keys(profileData).length"
    id="user-profile"
  >
    <profile-header :header-data="profileData.header" />
    <!-- profile info  -->
    <section id="profile-info">
      <b-row>
        <!-- about suggested page and twitter feed -->
        <b-col
          cols="12"
          lg="3"
          order="2"
          order-lg="1"
        >
          <profile-about :about-data="profileData.userAbout" />
          <profile-suggested-pages :pages-data="profileData.suggestedPages" />
          <profile-twitter-feed :twitter-feed="profileData.twitterFeeds" />
        </b-col>
        <!--/ about suggested page and twitter feed -->
        
        <!-- post -->
        <b-col
          cols="12"
          lg="6"
          order="1"
          order-lg="2"
        >
          <profile-post :posts="profileData.post" />
        </b-col>
        <!-- post -->
        
        <!-- latest photos suggestion and polls -->
        <b-col
          cols="12"
          lg="3"
          order="3"
        >
          <profile-latest-photos :latest-images="profileData.latestPhotos" />
          <profile-suggestion :suggestions="profileData.suggestions" />
          <profile-polls :polls-data="profileData.polls" />
        </b-col>
        <!--/ latest photos suggestion and polls -->
        
        <!-- load more  -->
        <b-col
          cols="12"
          order="4"
        >
          <profile-bottom />
        </b-col>
        <!--/ load more  -->
      </b-row>
    </section>
    <!--/ profile info  -->
  </div>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
import ProfileAbout   from "../components/profile/ProfileAbout.vue";
import profileBottom  from "../components/profile/profileBottom.vue";

import ProfileHeader         from "../components/profile/ProfileHeader.vue";
import ProfileLatestPhotos   from "../components/profile/ProfileLatestPhotos.vue";
import ProfilePolls          from "../components/profile/ProfilePolls.vue";
import ProfilePost           from "../components/profile/ProfilePost.vue";
import ProfileSuggestedPages from "../components/profile/ProfileSuggestedPages.vue";
import ProfileSuggestion     from "../components/profile/ProfileSuggestion.vue";
import ProfileTwitterFeed    from "../components/profile/ProfileTwitterFeed.vue";

/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,
    
    ProfileHeader,
    ProfileAbout,
    ProfileSuggestedPages,
    ProfileTwitterFeed,
    ProfilePost,
    ProfileLatestPhotos,
    ProfileSuggestion,
    ProfilePolls,
    profileBottom
  },
  data () {
    return {
      profileData: {}
    };
  },
  created () {
    this.$http.get( "/profile/data" )
      .then( res => { this.profileData = res.data; } );
  }
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-profile.scss';
</style>
