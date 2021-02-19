<template>
  <b-form>
    <b-row>
      <b-col
        v-for="socialField in socialInputs"
        :key="socialField.dataField"
        cols="12"
        lg="4"
        md="6"
      >
        <b-form-group
          :label="socialField.label"
          :label-for="socialField.dataField"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon
                :icon="socialField.icon"
                size="16"
              />
            </b-input-group-prepend>
            <b-form-input
              :id="socialField.dataField"
              v-model="userDataSocial[socialField.dataField]"
              type="url"
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col class="mt-2">
        <b-button
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          class="mb-1 mb-sm-0 mr-0 mr-sm-1"
          variant="primary"
        >
          Save Changes
        </b-button>
        <b-button
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BButton, BCol, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BRow,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BInputGroup,
    BInputGroupPrepend,
  },
  setup() {
    const userDataSocial = {
      twitter: 'https://www.twitter.com/adoptionism744',
      facebook: 'https://www.facebook.com/adoptionism664',
      instagram: 'https://www.instagram.com/adopt-ionism744',
      github: 'https://www.github.com/madop818',
      codepen: 'https://www.codepen.com/adoptism243',
      slack: '@adoptionism744',
    }

    // ? dataField is field name of `userDataSocial` object
    const socialInputs = [
      {
        icon: 'TwitterIcon',
        dataField: 'twitter',
        label: 'Twitter',
      }, {
        icon: 'FacebookIcon',
        dataField: 'facebook',
        label: 'facebook',
      }, {
        icon: 'InstagramIcon',
        dataField: 'instagram',
        label: 'instagram',
      }, {
        icon: 'GithubIcon',
        dataField: 'github',
        label: 'github',
      }, {
        icon: 'CodepenIcon',
        dataField: 'codepen',
        label: 'codepen',
      }, {
        icon: 'SlackIcon',
        dataField: 'slack',
        label: 'slack',
      },
    ]

    return {
      userDataSocial,
      socialInputs,
    }
  },
}
</script>

<style>

</style>
