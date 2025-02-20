import { tv } from "tailwind-variants";

import { cn } from "@/lib";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui-shadcn/tabs";

const variants = tv({
  slots: {
    tabs: "flex gap-6",
    tabsList: "flex flex-col gap-4 bg-transparent",
    tabsTrigger:
      "w-full justify-start rounded-lg p-2 text-text-primary data-[state=active]:bg-background-secondary",
    tabsContentContainer: "flex-1",
    tabsContent: "",
    tabContainer: "flex gap-3.5",
    tabTitleContainer: "flex flex-col gap-1 text-left",
    tabIcon: "mt-1 fill-black",
    tabTitle: "text-p",
    tabSubtitle: "text-body",
  },
  variants: {
    withIcons: { true: {} },
    iconProvided: { true: {} },
  },
  compoundVariants: [
    {
      withIcons: true,
      iconProvided: false,
      class: {
        tabIcon: "w-5",
      },
    },
    {
      withIcons: true,
      iconProvided: false,
      class: {
        tabIcon: "w-5",
      },
    },
  ],
});

interface TabProps {
  tabTitle: React.ReactNode;
  tabSubtitle?: React.ReactNode;
  tabIcon?: React.ReactNode;
  withIcon?: boolean;
}
interface VerticalTabProps extends TabProps {
  tabKey: string;
  tabContent: React.ReactNode;
}

export interface VerticalTabsProps {
  withIcons?: boolean;
  listClassName?: string;
  contentClassName?: string;
  tabs: VerticalTabProps[];
}

const Tab = ({ tabTitle, tabSubtitle, tabIcon, withIcon = false }: TabProps) => {
  const iconProvided = !!tabIcon;

  const {
    tabContainer: tabContainerClasses,
    tabIcon: tabIconClasses,
    tabTitleContainer: tabTitleContainerClasses,
    tabTitle: tabTitleClasses,
    tabSubtitle: tabSubtitleClasses,
  } = variants({ withIcons: withIcon, iconProvided });

  const TabIcon = withIcon ? <div className={tabIconClasses()}>{tabIcon}</div> : null;

  return (
    <div className={tabContainerClasses()}>
      {TabIcon}
      <div className={tabTitleContainerClasses()}>
        <div className={tabTitleClasses()}>{tabTitle}</div>
        {tabSubtitle && <div className={tabSubtitleClasses()}>{tabSubtitle}</div>}
      </div>
    </div>
  );
};

export const VerticalTabs = ({
  tabs,
  withIcons = false,
  listClassName,
  contentClassName,
}: VerticalTabsProps) => {
  const {
    tabs: tabsClasses,
    tabsList: tabsListClasses,
    tabsTrigger: tabsTriggerClasses,
    tabsContentContainer: tabsContentContainerClasses,
    tabsContent: tabsContentClasses,
  } = variants({ withIcons });

  const defaultValue = tabs[0]?.tabKey;

  return (
    <Tabs orientation="vertical" defaultValue={defaultValue} className={tabsClasses()}>
      <TabsList className={cn(tabsListClasses(), listClassName)}>
        {tabs.map((tab) => {
          return (
            <TabsTrigger key={tab.tabKey} value={tab.tabKey} className={tabsTriggerClasses()}>
              <Tab {...tab} withIcon={withIcons} />
            </TabsTrigger>
          );
        })}
      </TabsList>

      {/* Tabs Content */}
      <div className={tabsContentContainerClasses()}>
        {tabs.map((tab) => (
          <TabsContent
            key={tab.tabKey}
            value={tab.tabKey}
            className={cn(tabsContentClasses(), contentClassName)}
          >
            {tab.tabContent}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};
