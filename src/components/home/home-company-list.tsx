"use client";

import ListItems, { type BasicItem } from "./list-items";

export type HomeCompany = BasicItem;

interface Props {
  companies: HomeCompany[];
  onSuspendCompany?: (id: string) => void;
}

export default function HomeCompanyList({
  companies,
  onSuspendCompany,
}: Props) {
  return (
    <div className="w-[320px]">
      {companies.map((c) => (
        <ListItems key={c.id} item={c} onSuspend={onSuspendCompany} />
      ))}
    </div>
  );
}
