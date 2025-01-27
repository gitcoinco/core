// Toast.stories.tsx
import { Meta } from "@storybook/react";

import { useToast } from "@/hooks/useToast";
import { Button } from "@/primitives/Button";

import { Toaster } from "./Toaster";

export default {
  title: "components/Toaster",
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} as Meta;

export const SuccessToast = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      status: "success",
      description: "Your evaluation has been saved",
      timeout: 5000,
    });
  };
  return <Button onClick={showToast} variant="primary" value="Show Default Success Toast" />;
};

export const ErrorToast = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      status: "error",
      description: "Error: Your evaluation has not been saved. Please try again.",
      timeout: 5000,
    });
  };

  return <Button onClick={showToast} variant="primary" value="Show Default Error Toast" />;
};

// You can add more stories for different positions and variants as needed.

export const SuccessToastTopLeft = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      status: "success",
      description: "Your evaluation has been saved",
      timeout: 5000,
      toastPosition: "top-left",
    });
  };
  return <Button onClick={showToast} variant="primary" value="Show Success Toast Top Left" />;
};

export const ErrorToastTopRight = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      status: "error",
      description: "Error: Your evaluation has not been saved. Please try again.",
      timeout: 5000,
      toastPosition: "top-right",
    });
  };
  return <Button onClick={showToast} variant="primary" value="Show Error Toast Top Right" />;
};

export const SuccessToastBottomLeft = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      status: "success",
      description: "Your evaluation has been saved",
      timeout: 5000,
      toastPosition: "bottom-left",
    });
  };
  return <Button onClick={showToast} variant="primary" value="Show Success Toast Bottom Left" />;
};

export const ErrorToastTopCenter = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      status: "error",
      description: "Error: Your evaluation has not been saved. Please try again.",
      timeout: 5000,
      toastPosition: "top-center",
    });
  };
  return <Button onClick={showToast} variant="primary" value="Show Error Toast Bottom Right" />;
};
