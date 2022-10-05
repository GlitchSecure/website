export default ({ plans = [], creditPrice = null }) => ({

  plans,

  creditPrice,

  selectedPlanKey: null,

  creditCounter: null,

  openGetStarted() {
    this.$dispatch('getstarted', {method: 'Pricing Page'})
  },

  setGetStartedFields() {
    this.$dispatch('getstarted-set-fields', {
      plan: this.selectedPlanKey,
      credits: this.creditCounter
    })
  },

  selectPlan(planKey) {
    this.selectedPlanKey = planKey
    this.creditCounter = this.selectedPlan.base_credits
  },

  creditCounterIncrement() {
    const newValue = this.creditCounter + 1
    if (this.selectedPlan.max_credits >= newValue) {
      this.creditCounter = newValue
    }
  },

  creditCounterDecrement() {
    const newValue = this.creditCounter - 1
    if (this.selectedPlan.base_credits <= newValue) {
      this.creditCounter = newValue
    }
  },

  incrementingFeatureValue(featureKey) {
    const plan = this.selectedPlan,
          counter = this.creditCounter,
          incrFeature = plan.features.filter(f => f.key === featureKey)[0] || false

    if (!incrFeature) {
      return null
    }

    let value = 0,
        incrementCount = counter - plan.base_credits

    if (incrementCount <= 0) {
      value = incrFeature.base
    }

    if (incrementCount > 0) {
      value = incrFeature.base + (incrFeature.increment * incrementCount)
    }

    if (value <= incrFeature.base) {
      value = incrFeature.base
    } else if (value >= incrFeature.max) {
      value = incrFeature.max
    }

    return value
  },

  incrementingFeatureName(featureKey, unit, unitPlural) {
    const plan = this.selectedPlan,
          creditCount = this.incrementingFeatureValue(featureKey)

    if (creditCount === null) {
      return ''
    }

    return creditCount === 1 ? unit : unitPlural
  },

  isSelectedPlan(planKey) {
    return this.selectedPlanKey === planKey
  },

  isSelectedPlanFeature(featureKey) {
    return this.selectedPlan.features.map(f => f.key).includes(featureKey)
  },

  formatPrice(price) {
    if (typeof Intl !== 'undefined') {
      price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    } else {
      price = '$' + price.toFixed(2)
    }
    
    return price.toString().replace('.00', '')
  },

  formatCredits(creditCount) {
    return (
      creditCount === 1
        ? `${creditCount} Credit`
        : `${creditCount} Credits`
    )
  },

  planTotal(planKey) {
    const plan = this.plans.filter(plan => plan.key === planKey)[0]

    return this.formatPrice(
      plan.base_credits * this.creditPrice
    )
  },

  get selectedPlanTotal() {
    return this.formatPrice(
      this.creditCounter * this.creditPrice
    )
  },

  get selectedPlan() {
    return this.plans.filter(plan => plan.key === this.selectedPlanKey)[0]
  },

  get canDecrement() {
    return (this.creditCounter - 1) >= this.selectedPlan.base_credits
  },

  get canIncrement() {
    return (this.creditCounter + 1) <= this.selectedPlan.max_credits
  },

  init() {
    this.selectedPlanKey = this.plans[0].key
    this.creditCounter = this.plans[0].base_credits
    this.setGetStartedFields()
    
    this.$watch('selectedPlanKey', () => this.setGetStartedFields())
    // this.$watch('creditCounter',   () => this.setGetStartedFields())
  }
})