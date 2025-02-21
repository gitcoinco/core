import { ClientPage } from "@/pages/ClientPage";

export default function Page({ params }: { params: { component: string } }) {
  return <ClientPage type="primitives" component={params.component} />;
}
