import React from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1>Hệ Thiết Kế Hà Nội</h1>
      <Button label="Mở Modal" onClick={toggleModal} />
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h2>Modal Title</h2>
        <p>Nội dung modal.</p>
      </Modal>
    </div>
  );
};

export default App;