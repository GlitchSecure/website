export default ({ fields = {}, fieldClasses = [] }) => ({

  fields,

  fieldClasses: fieldClasses.join(' '),

  handleSetFields(event) {
    const fields = Object.entries(event.detail)

    fields.map(([fieldName, fieldValue]) => (
      (Object.keys(this.fields).includes(fieldName) && this.fields[fieldName] !== fieldValue) 
        ? this.fields[fieldName] = fieldValue
        : null
    ))
  },

  storeFields(fields = null) {
    Object.entries(fields || this.fields).map(([fieldName, fieldValue]) => (
      localStorage.setItem(`getstarted-${fieldName}`, fieldValue)
    ))
  },

  init() {

    // Get latest field values from localStorage
    Object.keys(this.fields).map(fieldName => (
      this.fields[fieldName] = localStorage.getItem(`getstarted-${fieldName}`) || this.fields[fieldName]
    ))

    // Update localStorage when fields change
    this.$watch('fields', this.storeFields)

    document.addEventListener('getstarted-set-fields', (event) => this.handleSetFields(event))

  }
})