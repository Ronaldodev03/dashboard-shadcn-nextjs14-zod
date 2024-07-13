import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function Alert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>view all</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" w-[calc(100%-32px)] sm:w-full max-w-lg ">
        <AlertDialogHeader>
          <AlertDialogTitle>Not available</AlertDialogTitle>
          <AlertDialogDescription>
            This module is not available yet.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Go Back</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
