import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

<<<<<<< HEAD
export function PageLayout({
  title,
  description,
  actions,
  children,
  className,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("w-full min-w-0 max-w-full space-y-6", className)}>
=======
export function PageLayout({ title, description, actions, children, className }: { title: string; description: string; actions?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={cn("space-y-6", className)}>
>>>>>>> 3afd25791cfd1cdb494b45cffbfbb916e448b357
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
          <p className="max-w-3xl text-sm text-muted-foreground">{description}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}
