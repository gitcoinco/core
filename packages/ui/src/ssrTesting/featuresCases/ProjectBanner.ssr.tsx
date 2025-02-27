import { SSRComponent } from "@gitcoin/types";

import { ProjectBanner } from "@/features/project";

const banner = "bafkreigt2makx2ld4jcbmmpnipmxiaq2qn2f54nb3pj254tuljcxyedu3m";
const logo = "bafkreifzwavjfgnauozlt2zhmrf3vhwyo3hl6c4dt4rwgp6gircmaf4t5a";

const projectBannerSSR: SSRComponent<React.ComponentProps<typeof ProjectBanner>> = {
  component: ProjectBanner,
  cases: [
    {
      label: "Center Avatar",
      props: {
        bannerImg: banner,
        logoImg: logo,
        avatarPosition: "center",
      },
    },
    {
      label: "Left Avatar",
      props: {
        bannerImg: banner,
        logoImg: logo,
        avatarPosition: "left",
      },
    },
    {
      label: "Right Avatar",
      props: {
        bannerImg: banner,
        logoImg: logo,
        avatarPosition: "right",
      },
    },
  ],
};

export default projectBannerSSR;
