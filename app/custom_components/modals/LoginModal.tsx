import React, { useCallback } from 'react'
import useLoginModal from '../hooks/useLoginModal';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '../hooks/useRegisterModal';
export default function LoginModal() {
    const loginModal = useLoginModal();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const registerModal = useRegisterModal();
    const onToggle = useCallback(() => {
      if (isLoading) return;
      loginModal.onClose();
      registerModal.onOpen();
    }, [isLoading, loginModal, registerModal]);
    const onSubmit = useCallback(
        async () => { 
            try {
                setIsLoading(true);
                //TODO: login
                
                loginModal.onClose();
            }
            catch (e) {
                console.error(e);
            }
            finally { 
                setIsLoading(false);
            }
        }, [loginModal]
        
    )
     const bodyContent = (
       <div className='flex flex-col gap-4'>
         <Input
           placeholder='Email'
           onChange={(e) => setEmail(e.target.value)}
           value={email}
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
     );const footerContent = (
       <div className='text-neutral-400 text-center mt-4'>
         <p>
           First time using Twitter?
           <span
             onClick={onToggle}
             className='
            text-white 
            cursor-pointer 
            hover:underline
          '
           >
             {''} Create an account
           </span>
         </p>
       </div>
     );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Sign in'
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
