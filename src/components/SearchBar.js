import React, { propTypes, Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <form className='input-group' onSubmit={event => this.props.getWeather(this.textInput)}>
        <input
        ref={(input) => this.textInput = input}
        className='form-control'
        placeholder='Search a US City' />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </span>
      </form>
    );
  }
}

// const SearchBar = ({ getWeather, value }) => {
//   let textInput = null;
//   return(
//     <form className='input-group' onSubmit={event => getWeather(this.textInput.val())}>
//       <input
//       value={value}
//       refs={(input) => this.textInput = input}
//       // onChange={event => getWeather(event.target.value)}
//       className='form-control'
//       placeholder='Search a US City' />
//       <span className='input-group-btn'>
//         <button className='btn btn-secondary' type='submit'>Submit</button>
//       </span>
//     </form>
//   );
// }
//
// SearchBar.propTypes = {
//   getWeather: React.PropTypes.func
// }

export default SearchBar;


// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.focus = this.focus.bind(this);
//   }
//
//   focus() {
//     // Explicitly focus the text input using the raw DOM API
//     this.textInput.focus();
//   }
//
//   render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in this.textInput.
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => this.textInput = input} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
