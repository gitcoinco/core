import { Meta, StoryObj } from "@storybook/react";

import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui-shadcn/dialog";

import { Button } from "../Button";
import { Modal } from "./Modal";

const meta = {
  title: "Primitives/Modal",
  component: Modal,
  args: {
    variant: "transparent",
    children: (
      <div className="p-4 text-center">
        <p>This modal has a transparent background effect.</p>
      </div>
    ),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 text-center">
        <p>This modal has a blur background effect.</p>
      </div>
    ),
  },
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" value="Open Modal" />
      </DialogTrigger>
      <Modal {...args} />
    </Dialog>
  ),
};

export const ModalWithButton: Story = {
  args: {
    children: (
      <div className="p-4 text-center">
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>This is a subtitle</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-2">This is a modal with a button.</div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button value="Save" variant="outlined-success" />
          </DialogClose>
        </DialogFooter>
      </div>
    ),
  },
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" value="Open Modal" />
      </DialogTrigger>
      <Modal {...args} />
    </Dialog>
  ),
};

export const DarkBackground: Story = {
  args: {
    overlayVariant: "dark",
    children: (
      <div className="p-4 text-center">
        <p>This modal has a dark background effect.</p>
      </div>
    ),
  },
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" value="Open Modal" />
      </DialogTrigger>
      <Modal {...args} />
    </Dialog>
  ),
};
