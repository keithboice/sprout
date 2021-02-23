<template>
  <b-card-code title="Repeating Forms">
    <div>
      <b-form ref="form" :style="{height: trHeight}" class="repeater-form" @submit.prevent="repeateAgain">
        
        <!-- Row Loop -->
        <b-row v-for="(item, index) in items" :id="item.id" :key="item.id" ref="row">
          
          <!-- Item Name -->
          <b-col md="4">
            <b-form-group label="Item Name" label-for="item-name">
              <b-form-input id="item-name" placeholder="Sprout Admin Template" type="text" />
            </b-form-group>
          </b-col>
          
          <!-- Cost -->
          <b-col md="2">
            <b-form-group label="Cost" label-for="cost">
              <b-form-input id="cost" placeholder="32" type="number" />
            </b-form-group>
          </b-col>
          
          <!-- Quantity -->
          <b-col md="2">
            <b-form-group label="Quantity" label-for="quantity">
              <b-form-input id="quantity" placeholder="1" type="number" />
            </b-form-group>
          </b-col>
          
          <!-- Profession -->
          <b-col lg="2" md="1">
            <b-form-group label="Price" label-for="price">
              <b-form-input id="pzrice" plaintext value="32$" />
            </b-form-group>
          </b-col>
          
          <!-- Remove Button -->
          <b-col class="mb-50" lg="2" md="3">
            <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" class="mt-0 mt-md-2" variant="outline-danger" @click="removeItem(index)">
              <feather-icon class="mr-25" icon="XIcon" />
              <span>Delete</span>
            </b-button>
          </b-col>
          <b-col cols="12">
            <hr>
          </b-col>
        </b-row>
      
      </b-form>
    </div>
    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" @click="repeateAgain">
      <feather-icon class="mr-25" icon="PlusIcon" />
      <span>Add New</span>
    </b-button>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                              from "@core/components/b-card-code"
import { BForm, BFormGroup, BFormInput, BRow, BCol, BButton } from "bootstrap-vue"
import { heightTransition }                                   from "@utils/mixins/ui/transition"
import Ripple                                                 from "vue-ripple-directive"
import { codeBasic }                                          from "./code"


export default {
  components: {
    BCardCode,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput
  },
  directives: {
    Ripple
  },
  mixins:     [ heightTransition ],
  data () {
    return {
      items:      [
        {
          id:         1,
          selected:   "male",
          selected1:  "designer",
          prevHeight: 0
        }
      ],
      nextTodoId: 2,
      codeBasic
    }
  },
  mounted () {
    this.initTrHeight()
  },
  created () {
    window.addEventListener( "resize", this.initTrHeight )
  },
  destroyed () {
    window.removeEventListener( "resize", this.initTrHeight )
  },
  methods: {
    repeateAgain () {
      this.items.push( {
                         id: this.nextTodoId += this.nextTodoId
                       } )
      
      this.$nextTick( () => {
        this.trAddHeight( this.$refs.row[ 0 ].offsetHeight )
      } )
    },
    removeItem ( index ) {
      this.items.splice( index, 1 )
      this.trTrimHeight( this.$refs.row[ 0 ].offsetHeight )
    },
    initTrHeight () {
      this.trSetHeight( null )
      this.$nextTick( () => {
        this.trSetHeight( this.$refs.form.scrollHeight )
      } )
    }
  }
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
