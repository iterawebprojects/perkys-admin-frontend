// src/app/moderacion/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/layout/statusbar";
import Navbar from "@/components/layout/navbar";
import ModerationTopSection from "@/components/moderacion/moderation-top-section";
import RequestsList, {
  type RequestItem,
} from "@/components/moderacion/moderation-requests-list";

type MainTab = "solicitudes" | "reportes";
type StatusTab = "pending" | "finished";
type NavKey = "home" | "moderation" | "notifications" | "profile";

const MOCK: RequestItem[] = [
  {
    id: "1",
    name: "Mundo Mágico",
    category: "Juguetes, Niños y Bebés",
    email: "mundomagico@gmail.com",
    status: "Pendiente",
  },
  {
    id: "2",
    name: "Mundo Mágico",
    category: "Juguetes, Niños y Bebés",
    email: "mundomagico@gmail.com",
    status: "Pendiente",
  },
  {
    id: "3",
    name: "Mundo Mágico",
    category: "Juguetes, Niños y Bebés",
    email: "mundomagico@gmail.com",
    status: "Pendiente",
  },
];

export default function Moderacion() {
  const [mainTab, setMainTab] = useState<MainTab>("solicitudes");
  const [statusTab, setStatusTab] = useState<StatusTab>("pending");
  const [nav, setNav] = useState<NavKey>("moderation");
  const router = useRouter();

  const items = statusTab === "pending" ? MOCK : [];

  const handleNavChange = (k: NavKey) => {
    setNav(k);
    if (k === "home") router.push("/home");
    if (k === "moderation") router.push("/moderacion");
    if (k === "notifications") router.push("/notificaciones");
    if (k === "profile") router.push("/perfil");
  };

  // 👇 Abre detalle
  const handleOpenRequest = (id: string) => {
    router.push(`/moderacion/solicitudes/${id}`);
  };

  return (
    <main className="relative mx-auto h-[800px] w-[360px] overflow-y-auto rounded-md bg-white shadow-md pb-[90px]">
      <StatusBar />

      <div className="absolute left-[20px] top-[44px] flex w-[322px] flex-col items-start gap-[20px]">
        <ModerationTopSection
          mainTab={mainTab}
          onMainTabChange={setMainTab}
          statusTab={statusTab}
          onStatusTabChange={setStatusTab}
        />

        {mainTab === "solicitudes" ? (
          <div className="w-[320px]">
            <RequestsList items={items} onClickItem={handleOpenRequest} />
          </div>
        ) : (
          <div className="w-[320px] text-center text-[12px] leading-4 text-[#808080]">
            Reportes (próximamente)
          </div>
        )}
      </div>

      <Navbar current={nav} onChange={handleNavChange} />
    </main>
  );
}
