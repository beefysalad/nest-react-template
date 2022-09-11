import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
} from '@chakra-ui/react';

interface ModalProps {
  children: React.ReactNode;
  header: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomModal = ({
  children,
  header,
  isOpen,
  onClose,
}: ModalProps) => {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size='xl'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <Divider />
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  );
};
