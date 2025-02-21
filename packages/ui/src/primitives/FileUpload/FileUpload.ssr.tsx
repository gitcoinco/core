import { SSRComponent } from "@/types";

import { FileUpload } from "./FileUpload";

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
