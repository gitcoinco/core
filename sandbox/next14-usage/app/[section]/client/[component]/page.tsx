import { ClientPage } from "@/pages/ClientPage";
import { SSRComponentType } from "@/utils/getSSRComponentData";

export default function Page({ params }: { params: { section: string; component: string } }) {
  return <ClientPage type={params.section as SSRComponentType} component={params.component} />;
}
