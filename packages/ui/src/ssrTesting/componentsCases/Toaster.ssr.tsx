import { Toaster } from "@/components/Toaster/Toaster";
import { useToast } from "@/hooks";
import { Button } from "@/primitives";
import { SSRComponent } from "@/types";

const ToasterPlayground = () => {
  const { toast } = useToast();
  const showToast = () => {
    toast({
      status: "success",
      description: "Your evaluation has been saved",
      timeout: 5000,
    });
  };
  return (
    <>
      <Button onClick={showToast} variant="primary" value="Show Default Success Toast" />
      <Toaster />
    </>
  );
};

const toasterSSR: SSRComponent<React.ComponentProps<typeof ToasterPlayground>> = {
  component: ToasterPlayground,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {},
    },
  ],
};

export default toasterSSR;
