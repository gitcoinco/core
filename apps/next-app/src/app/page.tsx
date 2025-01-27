import * as React from "react";
import { Button } from "@gitcoin/ui";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-10">
      <h1>Web</h1>
      <Button variant="primary" value="Boop" />
    </div>
  );
}
