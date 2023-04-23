import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import {
  Input,
  Label,
  SearchButton,
  SearchForm,
  SearchbarWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return toast.warn('Please, write something');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <Label>Search</Label>
          <FcSearch size="30" />
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = event => {
//     this.setState({ query: event.target.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.query.trim() === '') {
//       return toast.warn('Please, write something');
//     }
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <SearchbarWrapper>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchButton type="submit">
//             <Label>Search</Label>
//             <FcSearch size="30" />
//           </SearchButton>

//           <Input
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={this.state.query}
//           />
//         </SearchForm>
//       </SearchbarWrapper>
//     );
//   }
// }
