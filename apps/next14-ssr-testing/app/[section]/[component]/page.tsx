import { ServerPage } from "@/pages/ServerPage";
import { SSRComponentType } from "@/utils/getSSRComponentData";

export default function Page({ params }: { params: { section: string; component: string } }) {
  return <ServerPage component={params.component} type={params.section as SSRComponentType} />;
}
