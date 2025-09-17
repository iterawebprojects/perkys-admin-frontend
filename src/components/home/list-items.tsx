"use client";

import { AlertTriangle, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ItemStatus = "active" | "inactive" | "suspended";

export interface BasicItem {
  id: string;
  name: string;
  email: string;
  status: ItemStatus;
  avatarSrc?: string;
}

interface Props {
  item: BasicItem;
  onSuspend?: (id: string) => void;
}

function statusPill(status: ItemStatus) {
  const base =
    "inline-flex h-[20px] min-w-[70px] items-center justify-center rounded-[15px] px-2 text-[10px] font-medium";
  switch (status) {
    case "active":
      return { className: `${base} bg-[#79B465] text-white`, label: "Activo" };
    case "inactive":
      return {
        className: `${base} bg-[#DCBD4C] text-white`,
        label: "Inactivo",
      };
    case "suspended":
      return {
        className: `${base} bg-[#BD2734] text-white`,
        label: "Suspendido",
      };
  }
}

export default function ListItem({ item, onSuspend }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const pill = statusPill(item.status);

  return (
    <div className="mb-2 w-[320px] rounded-[15px] bg-[#F5F5F5] p-[15px]">
      <div className="flex w-full items-start justify-between">
        {/* Datos + foto */}
        <div className="flex items-center gap-2">
          {/* Avatar 37×37 fijo */}
          <div className="relative h-[37px] w-[37px] shrink-0 overflow-hidden rounded-[8px] bg-[#D9D9D9]">
            {item.avatarSrc && (
              <Image
                src={item.avatarSrc}
                alt={item.name}
                fill
                className="object-cover"
                sizes="37px"
              />
            )}
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-2">
              <span className="truncate text-[14px] leading-5 text-[#242424]">
                {item.name}
              </span>
              <span className={pill.className}>{pill.label}</span>
            </div>
            <span className="truncate text-[10px] leading-4 text-[#808080]">
              {item.email}
            </span>
          </div>
        </div>

        {/* Dots + popover */}
        <div className="relative" ref={ref}>
          <button
            type="button"
            className="rounded-full p-1 text-[#242424]/80 transition hover:bg-black/5"
            aria-label="acciones"
            onClick={() => setOpen((v) => !v)}
          >
            <MoreVertical size={18} />
          </button>

          {open && (
            <div
              className="absolute right-0 z-20 mt-1 flex h-[36px] w-[167px] items-center justify-center gap-2 rounded-[15px_0_15px_15px] bg-white px-4 shadow-[0_0_15px_rgba(0,0,0,0.25)]"
              role="menu"
            >
              <Image
                src="/icons/alerta.svg"
                alt="Suspender"
                width={18}
                height={18}
                className="shrink-0"
              />
              <button
                type="button"
                className="flex h-full items-center text-[14px] leading-5 text-[#242424]"
                onClick={() => {
                  setOpen(false);
                  onSuspend?.(item.id);
                }}
              >
                Suspender
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
