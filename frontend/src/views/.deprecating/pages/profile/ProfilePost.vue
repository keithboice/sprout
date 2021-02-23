<template>
  <div>
    <b-card
      v-for="(data) in posts"
      :key="data.avatar"
    >
      <div class="d-flex justify-content-start align-items-center mb-1">
        <!-- avatar -->
        <b-avatar
          :src="data.avatar"
          class="mr-1"
          size="50"
        />
        <!--/ avatar -->
        <div class="profile-user-info">
          <h6 class="mb-0">
            {{ data.username }} </h6>
          <small class="text-muted">{{ data.postTime }}</small>
        </div>
      </div>
      <b-card-text>
        {{ data.postText }}
      </b-card-text>
      
      <!-- post img -->
      <b-img
        v-if="data.postImg"
        :src="data.postImg"
        class="mb-25"
        fluid
        rounded
      />
      <!--/ post img -->
      <!-- post video -->
      <b-embed
        v-if="data.postVid"
        :src="data.postVid"
        allowfullscreen
        class="rounded mb-50"
        type="iframe"
      />
      <!--/ post video -->
      
      <!-- likes comments  share-->
      <b-row class="pb-50 mt-50">
        <b-col
          class="d-flex justify-content-between justify-content-sm-start mb-2"
          sm="8"
        >
          <b-link class="d-flex align-items-center text-muted text-nowrap">
            <feather-icon
              :class="data.youLiked ? 'profile-likes':'profile-icon'"
              class="mr-50"
              icon="HeartIcon"
              size="18"
            />
            <span>{{ kFormatter( data.likes ) }}</span>
          </b-link>
          <div class="d-flex align-item-center">
            <b-avatar-group
              class="ml-1"
              size="26"
            >
              <b-avatar
                v-for="(avatarData,i) in data.likedUsers"
                :key="i"
                v-b-tooltip.hover.bottom="avatarData.username"
                :src="avatarData.avatar"
                class="pull-up"
              />
            </b-avatar-group>
            <b-link class="text-muted text-nowrap mt-50 ml-50">
              +{{ data.likedCount }} more
            </b-link>
          </div>
        </b-col>
        <b-col
          class="d-flex justify-content-between justify-content-sm-end align-items-center mb-2"
          sm="4"
        >
          <b-link class="text-body text-nowrap">
            <feather-icon
              class="profile-icon mr-50"
              icon="MessageSquareIcon"
              size="18"
            />
            <span class="text-muted mr-1">{{ kFormatter( data.comments ) }}</span>
          </b-link>
          <b-link class="text-body text-nowrap">
            <feather-icon
              class="profile-icon mr-50"
              icon="Share2Icon"
              size="18"
            />
            <span class="text-muted">{{ kFormatter( data.share ) }}</span>
          </b-link>
        </b-col>
      </b-row>
      <!--/ likes comments  share-->
      
      <!-- comments -->
      <div
        v-for="(comment,ind) in data.detailedComments"
        :key="ind"
        class="d-flex align-items-start mb-1"
      >
        <b-avatar
          :src="comment.avatar"
          class="mt-25 mr-75"
          size="34"
        />
        <div class="profile-user-info w-100">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="mb-0">
              {{ comment.username }} </h6>
            <b-link class="text-body">
              <feather-icon
                :class="comment.youLiked ? 'profile-likes' :'profile-icon'"
                class="mr-25"
                icon="HeartIcon"
                size="18"
              />
              <span class="text-muted align-middle">{{ comment.commentsLikes }}</span>
            </b-link>
          </div>
          <small>{{ comment.comment }}</small>
        </div>
      </div>
      <!--/ comments -->
      
      <!-- comment box -->
      <b-form-group>
        <b-form-textarea
          placeholder="Add Comment"
          rows="3"
        />
      </b-form-group>
      <!--/ comment box -->
      
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        size="sm"
        variant="primary"
      >
        Post Comment
      </b-button>
    </b-card>
  </div>
</template>

<script>
import {
  BAvatar, BCard, BCardText, BImg, BLink, BRow, BCol, BAvatarGroup, VBTooltip, BFormTextarea, BButton, BFormGroup, BEmbed
}                     from "bootstrap-vue"
import Ripple         from "vue-ripple-directive"
import { kFormatter } from "@core/../../../utils/filter"


export default {
  components: {
    BAvatar,
    BCard,
    BCardText,
    BButton,
    BFormTextarea,
    BImg,
    BFormGroup,
    BRow,
    BLink,
    BCol,
    BAvatarGroup,
    BEmbed
  },
  directives: {
    "b-tooltip": VBTooltip,
    Ripple
  },
  props:      {
    posts: {
      type:    Array,
      default: () => []
    }
  },
  methods:    {
    kFormatter
  }
}
</script>
