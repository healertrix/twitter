import React, { useCallback } from 'react';
import useLoginModal from '../hooks/useLoginModal';
import useRegisterModal from '../hooks/useRegisterModal';
import Input from '../Input';
import Modal from '../Modal';
export default function RegisterModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const onToggle = useCallback(() => { 
    if (isLoading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, loginModal, registerModal]);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //TODO: register and login

      registerModal.onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
    const footerContent = (
      <div className='text-neutral-400 text-center mt-4'>
        <p>
          Already have an account?
          <span
            onClick={onToggle}
            className='
            text-white 
            cursor-pointer 
            hover:underline
          '
          >
            {' '}Sign in
          </span>
        </p>
      </div>
    );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Create an account'
      actionLabel='Register'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
