import { SSRComponent } from "@gitcoin/types";

import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/primitives/Dialog";
import { Modal, ModalProps } from "@/primitives/Modal/Modal";

const ModalComponent = (props: ModalProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <button>Open Modal</button>
    </DialogTrigger>
    <Modal {...props} />
  </Dialog>
);

const modalSSR: SSRComponent<React.ComponentProps<typeof ModalComponent>> = {
  component: ModalComponent,
  cases: [
    {
      label: "Default",
      props: {
        overlayVariant: "transparent",
        children: (
          <div className="p-4 text-center">
            <p>This modal has a transparent background effect.</p>
          </div>
        ),
      },
    },
    {
      label: "Blur Background",
      props: {
        overlayVariant: "blur",
        children: (
          <div className="p-4 text-center">
            <p>This modal has a blur background effect.</p>
          </div>
        ),
      },
    },
    {
      label: "WithButton",
      props: {
        children: (
          <div className="p-4 text-center">
            <DialogHeader>
              <DialogTitle>Modal Title</DialogTitle>
              <DialogDescription>This is a subtitle</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 py-2">This is a modal with a button.</div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <button>Save</button>
              </DialogClose>
            </DialogFooter>
          </div>
        ),
      },
    },
    {
      label: "Dark Background",
      props: {
        overlayVariant: "dark",
        children: (
          <div className="p-4 text-center">
            <p>This modal has a dark background effect.</p>
          </div>
        ),
      },
    },
  ],
};

export default modalSSR;
