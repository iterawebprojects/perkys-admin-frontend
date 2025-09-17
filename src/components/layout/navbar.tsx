"use client";

import { Bell, Home, ShieldCheck, User } from "lucide-react";

type NavKey = "home" | "moderation" | "notifications" | "profile";

export default function Navbar({
  current,
  onChange,
}: {
  current: NavKey;
  onChange: (key: NavKey) => void;
}) {
  return (
    <nav
      className="-translate-x-1/2 absolute bottom-0 left-1/2 flex h-[61px] w-[360px] flex-row items-center justify-between bg-white px-[30px] py-[8px] shadow-[4px_0px_10px_rgba(0,0,0,0.25)]"
      aria-label="Admin navigation"
    >
      <NavItem
        label="Inicio"
        icon={<Home size={24} />}
        active={current === "home"}
        onClick={() => onChange("home")}
      />
      <NavItem
        label="Moderación"
        icon={<ShieldCheck size={24} />}
        active={current === "moderation"}
        onClick={() => onChange("moderation")}
      />
      <NavItem
        label="Notificaciones"
        icon={<Bell size={24} />}
        active={current === "notifications"}
        onClick={() => onChange("notifications")}
      />
      <NavItem
        label="Perfil"
        icon={<User size={24} />}
        active={current === "profile"}
        onClick={() => onChange("profile")}
      />
    </nav>
  );
}

function NavItem({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[45px] flex-col items-center justify-center gap-[5px] transition hover:scale-[1.05]"
      aria-pressed={active}
    >
      <div
        className={`h-6 w-6 transition-colors ${
          active ? "text-[#FF6600]" : "text-[#808080] hover:text-[#FF6600]"
        }`}
      >
        {icon}
      </div>
      <span
        className={`font-['Ubuntu'] text-[12px] leading-[16px] transition-colors ${
          active ? "text-[#FF6600]" : "text-[#808080] hover:text-[#FF6600]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
