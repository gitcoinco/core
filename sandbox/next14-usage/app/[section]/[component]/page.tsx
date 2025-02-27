import { ServerPage } from "@/components/ServerPage";
import { SSRComponentType } from "@/utils/getSSRComponentData";

interface Props {
  params: Promise<{ section: string; component: string }>;
}

export default async function Page({ params }: Props) {
  const { section, component } = await params;
  return <ServerPage component={component} type={section as SSRComponentType} />;
}
