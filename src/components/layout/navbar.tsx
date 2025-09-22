"use client";

import Image from "next/image";

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
        iconSrc="/icons/home.svg"
        active={current === "home"}
        onClick={() => onChange("home")}
      />
      <NavItem
        label="Moderación"
        iconSrc="/icons/lista.svg"
        active={current === "moderation"}
        onClick={() => onChange("moderation")}
      />
      <NavItem
        label="Notificaciones"
        iconSrc="/icons/campana.svg"
        active={current === "notifications"}
        onClick={() => onChange("notifications")}
      />
      <NavItem
        label="Perfil"
        iconSrc="/icons/usuario.svg"
        active={current === "profile"}
        onClick={() => onChange("profile")}
      />
    </nav>
  );
}

function NavItem({
  label,
  iconSrc,
  active,
  onClick,
}: {
  label: string;
  iconSrc: string;
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
      {/* Ícono exportado en SVG (24x24 en Figma) */}
      <Image
        src={iconSrc}
        alt={label}
        width={24}
        height={24}
        className={`transition ${active ? "brightness-75" : "brightness-100"}`}
      />
      <span
        className={`font-['Ubuntu'] text-[12px] leading-[16px] transition-colors ${
          active ? "text-[#242424] hover:text-[#242424]" : "text-[#808080] "
        }`}
      >
        {label}
      </span>
    </button>
  );
}
