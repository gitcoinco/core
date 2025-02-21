import { ClientPage } from "@/pages/ClientPage";

export default function Page({ params }: { params: { component: string } }) {
  return <ClientPage type="smartComponents" component={params.component} />;
}
