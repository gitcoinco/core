import { FileUpload } from "@/primitives/FileUpload/FileUpload";
import { SSRComponent } from "@/types";

const fileUploadSSR: SSRComponent<React.ComponentProps<typeof FileUpload>> = {
  component: FileUpload,
  cases: [
    {
      label: "Default",
      props: {},
    },
  ],
};

export default fileUploadSSR;
