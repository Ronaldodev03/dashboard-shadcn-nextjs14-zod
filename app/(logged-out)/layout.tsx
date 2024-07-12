import { LightDarkToggle } from "@/components/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-4 sm:p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-2 sm:-translate-y-1/2 sm:top-1/2  right-2" />
    </>
  );
}
