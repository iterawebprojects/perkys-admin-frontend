"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export type NavKey = "home" | "moderation" | "notifications" | "profile";

const NAV_ROUTES: Record<NavKey, string> = {
  home: "/home",
  moderation: "/moderacion", // 👈 ruta en español
  notifications: "/notificaciones",
  profile: "/perfil",
};

export default function Navbar({
  current,
  onChange,
}: {
  current?: NavKey; // ahora es opcional
  onChange?: (key: NavKey) => void; // ahora es opcional
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Si no viene `current`, inferimos desde la URL
  const inferred: NavKey | null = pathname?.startsWith("/home")
    ? "home"
    : pathname?.startsWith("/moderacion")
    ? "moderation"
    : pathname?.startsWith("/notificaciones")
    ? "notifications"
    : pathname?.startsWith("/perfil")
    ? "profile"
    : null;

  const active = current ?? inferred ?? "home";

  const go = (k: NavKey) => {
    onChange?.(k);
    // si no hay onChange o igual queremos navegar, hacemos push
    router.push(NAV_ROUTES[k]);
  };

  return (
    <nav
      className="-translate-x-1/2 absolute bottom-0 left-1/2 flex h-[61px] w-[360px] flex-row items-center justify-between bg-white px-[30px] py-[8px] shadow-[4px_0px_10px_rgba(0,0,0,0.25)]"
      aria-label="Admin navigation"
    >
      <NavItem
        label="Inicio"
        iconSrc="/icons/home.svg"
        active={active === "home"}
        onClick={() => go("home")}
      />
      <NavItem
        label="Moderación"
        iconSrc="/icons/lista.svg"
        active={active === "moderation"}
        onClick={() => go("moderation")}
      />
      <NavItem
        label="Notificaciones"
        iconSrc="/icons/campana.svg"
        active={active === "notifications"}
        onClick={() => go("notifications")}
      />
      <NavItem
        label="Perfil"
        iconSrc="/icons/usuario.svg"
        active={active === "profile"}
        onClick={() => go("profile")}
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
      aria-current={active ? "page" : undefined}
    >
      <Image
        src={iconSrc}
        alt={label}
        width={24}
        height={24}
        className={`transition ${active ? "brightness-75" : "brightness-100"}`}
      />
      <span
        className={`font-['Ubuntu'] text-[12px] leading-[16px] transition-colors ${
          active ? "text-[#242424]" : "text-[#808080]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
