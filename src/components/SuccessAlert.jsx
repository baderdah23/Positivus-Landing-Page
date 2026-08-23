import { CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function SuccessAlert({ className }) {
  return (
    <div className="grid w-full max-w-md items-start gap-4 transition-all duration-300">
      <Alert className={className}>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription className="text-primary">
          You have subscribed to the mailing list. <br /> You will receive all
          the latest updates.
        </AlertDescription>
      </Alert>
    </div>
  );
}
