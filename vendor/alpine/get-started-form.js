export default ({ fields = {}, fieldClasses = [] }) => ({

  fields,

  fieldClasses: fieldClasses.join(' '),

  handleSubmit() {
    this.getstartedFormOpen = false
    this.getstartedCalendarOpen = true
    window.getstarted()
    plausible('Get Started Submission', {props: {method: 'Get Started Form'}})
  },

  handleSetFields(event) {
    const fields = Object.entries(event.detail)

    fields.map(([fieldName, fieldValue], index) => (
      (Object.keys(this.fields).includes(fieldName) && this.fields[fieldName] !== fieldValue) 
        ? this.fields[fieldName] = fieldValue
        : null
    ))

  },

  init() {

    for (var fieldName in this.fields) {
      // Get latest field values from localStorage
      this.fields[fieldName] = localStorage.getItem(`getstarted-${fieldName}`)
      // Set changing field values to localStorage
      this.$watch(`fields.${fieldName}`, (val) => localStorage.setItem(`getstarted-${fieldName}`, val))
    }

  }
})