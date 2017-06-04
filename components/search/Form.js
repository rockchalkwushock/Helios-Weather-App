import { Field } from 'redux-form'

const Form = ({ handleSubmit }) =>
  (<form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="input">Search</label>
      <Field name="input" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>)

export default Form
