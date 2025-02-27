import { SSRComponent } from "@gitcoin/types";

import { FileUpload } from "@/primitives/FileUpload/FileUpload";

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
