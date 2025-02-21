import { ServerPage } from "@/pages/ServerPage";

export default function Page({ params }: { params: { component: string } }) {
  return <ServerPage component={params.component} type="primitives" />;
}
