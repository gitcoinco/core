import { ClientPage } from "@/components/ClientPage";
import { SSRComponentType } from "@/utils/getSSRComponentData";

interface Props {
  params: Promise<{ section: string; component: string }>;
}

export default async function Page({ params }: Props) {
  const { section, component } = await params;
  return <ClientPage type={section as SSRComponentType} component={component} />;
}
