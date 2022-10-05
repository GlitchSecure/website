export default ({ fieldDefaults, fieldClasses = [] }) => ({

  fieldDefaults,

  fields: fieldDefaults,

  fieldClasses: fieldClasses.join(' '),

  handleSetFields(newFields) {
    Object.entries(newFields).map(([fieldName, fieldValue]) => (
      this.fields[fieldName] = fieldValue
    ))
  },

  handleClearFields() {
    this.fields = this.fieldDefaults
  },

  storeFields(newFields) {
    Object.entries(newFields).map(([fieldName, fieldValue]) => (
      localStorage.setItem(`getstarted-${fieldName}`, fieldValue)
    ))
  },

  getStoredFields() {
    Object.keys(this.fields).map(fieldName => (
      this.fields[fieldName] = localStorage.getItem(`getstarted-${fieldName}`) || this.fields[fieldName]
    ))
  },

  init() {

    // Get latest field values from localStorage
    this.getStoredFields()

    // Update localStorage when fields change
    this.$watch('fields', (fields) => this.storeFields(fields))

    document.addEventListener('getstarted-set-fields',   (event) => this.handleSetFields(event.detail))
    document.addEventListener('getstarted-clear-fields', (event) => this.handleClearFields())

  }
})