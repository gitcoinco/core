import { Icon, IconType } from "@/primitives/Icon";
import { VerticalTabs } from "@/primitives/VerticalTabs/VerticalTabs";
import { SSRComponent } from "@/types";

export const tabs = [
  {
    tabTitle: "Applications",
    tabSubtitle: "Review and approve applications",
    tabIcon: <Icon type={IconType.DOCUMENT_DUPLICATE} />,
    tabKey: "applications",
    tabContent: (
      <div className="inline-flex h-60 flex-col justify-start gap-6 rounded-3xl bg-[#f7f7f7] p-6">
        <div className="text-2xl font-medium leading-loose text-black">Applications</div>
        <div className="text-base font-normal leading-7 text-grey-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    ),
  },
  {
    tabTitle: "Voters",
    tabSubtitle: "Configure voter settings",
    tabIcon: <Icon type={IconType.USERS} />,
    tabKey: "signup",
    tabContent: (
      <div className="inline-flex h-60 flex-col justify-start gap-6 rounded-3xl bg-[#f7f7f7] p-6">
        <div className="text-2xl font-medium leading-loose text-black">Voters</div>
        <div className="text-base font-normal leading-7 text-grey-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    ),
  },
  {
    tabTitle: "Custom",
    tabSubtitle: "Example without icon",
    tabKey: "custom",
    tabContent: (
      <div className="inline-flex h-60 flex-col justify-start gap-6 rounded-3xl bg-[#f7f7f7] p-6">
        <div className="text-2xl font-medium leading-loose text-black">Custom</div>
        <div className="text-base font-normal leading-7 text-grey-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    ),
  },
];

const verticalTabsSSR: SSRComponent<React.ComponentProps<typeof VerticalTabs>> = {
  component: VerticalTabs,
  cases: [
    {
      label: "Default",
      props: {
        tabs,
        withIcons: false,
      },
    },
    {
      label: "With Icons",
      props: {
        tabs,
        withIcons: true,
      },
    },
    {
      label: "With Custom List Width",
      props: {
        tabs,
        withIcons: true,
        listClassName: "w-[302px]",
      },
    },
    {
      label: "With Custom Content Width",
      props: {
        tabs,
        withIcons: true,
        contentClassName: "mt-3",
      },
    },
  ],
};

export default verticalTabsSSR;
