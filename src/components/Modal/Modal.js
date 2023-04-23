import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, Overlay, Wrapper } from './Modal.styled';

export const Modal = ({ largeImage, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleClickBackDrop = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleClickBackDrop}>
      <Wrapper>
        <Image src={largeImage} alt="" />
      </Wrapper>
    </Overlay>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   handleClickBackDrop = event => {
//     if (event.currentTarget === event.target) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <Overlay onClick={this.handleClickBackDrop}>
//         <Wrapper>
//           <Image src={this.props.largeImage} alt="" />
//         </Wrapper>
//       </Overlay>
//     );
//   }
// }
