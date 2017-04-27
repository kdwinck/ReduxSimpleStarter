import React, { Component } from 'react' //same as const Component = React.Component

// CLASS COMPONTENT
class SearchBar extends Component {

  // this is used to initalize state in a class component | called whenever a new instance of a class is created
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }

}

export default SearchBar



// FUNCTIONAL COMPONENT
// const SearchBar = () => {
//   return <input />
// }

// event listener
// onInputChange(event) {
//   console.log(event.target.value);
// }
