<template>
  <form-wizard ref="refFormWizard" :subtitle="null" :title="null" back-button-text="Previous" class="checkout-form-wizard steps-transparent" color="#7367F0" finish-button-text="Submit" hide-buttons>
    <!-- account detail tab -->
    <tab-content icon="feather icon-shopping-cart" title="Cart">
      <e-commerce-checkout-step-cart @next-step="formWizardNextStep" />
    </tab-content>
    
    <!-- address -->
    <tab-content icon="feather icon-home" title="Address">
      <e-commerce-checkout-step-address :address-details="checkoutDetails.address" @next-step="formWizardNextStep" />
    </tab-content>
    
    <!-- social link -->
    <tab-content icon="feather icon-credit-card" title="Payment">
      <e-commerce-checkout-step-payment :payment-details="checkoutDetails.payment" @next-step="formWizardNextStep" />
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent }   from "vue-form-wizard"
import { ref }                      from "@vue/composition-api"
import ECommerceCheckoutStepPayment from "./ECommerceCheckoutStepPayment.vue"
import ECommerceCheckoutStepCart    from "./ECommerceCheckoutStepCart.vue"
import ECommerceCheckoutStepAddress from "./ECommerceCheckoutStepAddress.vue"


export default {
  components: {
    // 3rd Party
    FormWizard,
    TabContent,
    
    // SFC
    ECommerceCheckoutStepCart,
    ECommerceCheckoutStepAddress,
    ECommerceCheckoutStepPayment
  },
  setup () {
    const refFormWizard = ref( null )
    const formWizardNextStep = () => {
      refFormWizard.value.nextTab()
    }
    
    // ? This is just dummy details
    const checkoutDetails = ref( {
                                   address: {
                                     fullName:    "",
                                     mobile:      "",
                                     houseNo:     "",
                                     landmark:    "",
                                     city:        "",
                                     pincode:     "",
                                     state:       "",
                                     addressType: null
                                   },
                                   payment: {
                                     cvv: ""
                                   }
                                 } )
    
    return {
      refFormWizard,
      formWizardNextStep,
      
      // Dummy Details
      checkoutDetails
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '~@core/scss/base/pages/app-ecommerce.scss';
@import '../../../../../../node_modules/vue-form-wizard/dist/vue-form-wizard.min.css';
</style>

<style lang="scss" scoped>
.checkout-form-wizard ::v-deep {
  .wizard-tab-content {
    box-shadow: none !important;
    background: transparent !important;
    padding: 0;
  }
}
</style>
