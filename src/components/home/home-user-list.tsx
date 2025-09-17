"use client";

import ListItems, { type BasicItem } from "./list-items";

export type HomeUser = BasicItem;

interface Props {
  users: HomeUser[];
  onSuspendUser?: (id: string) => void;
}

export default function HomeUserList({ users, onSuspendUser }: Props) {
  return (
    <div className="w-[320px]">
      {users.map((u) => (
        <ListItems key={u.id} item={u} onSuspend={onSuspendUser} />
      ))}
    </div>
  );
}
