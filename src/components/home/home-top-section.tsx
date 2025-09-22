"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Status = "active" | "inactive" | "suspended";

interface Props {
  tab: "usuarios" | "empresas";
  onTabChange: (tab: "usuarios" | "empresas") => void;
  q: string;
  onQueryChange: (q: string) => void;
  filter: Status | null;
  onFilterChange: (status: Status | null) => void;
}

export default function HomeTopSection({
  tab,
  onTabChange,
  q,
  onQueryChange,
  filter,
  onFilterChange,
}: Props) {
  return (
    // Contenido (322×≈216)
    <div className="flex w-[322px] flex-col items-center gap-[10px]">
      {/* Logotipo 57×19.58 */}
      <div className="flex h-[19.58px] w-[57px] items-end">
        <Image
          src="/logo/logotipo.svg"
          alt="Perkys"
          width={57}
          height={20}
          priority
          className="h-[19.58px] w-[57px]"
        />
      </div>

      {/* Título + Tabs + Buscar + Filtros */}
      <div className="flex w-[322px] flex-col items-start gap-[19px]">
        {/* Título */}
        <div className="flex h-[24px] w-[153px] items-start gap-[5px]">
          <h2 className="h-[24px] w-[82px] text-center font-bold font-ubuntu text-[#242424] text-[18px] leading-[24px]">
            Registros
          </h2>
        </div>

        {/* Tabs (Usuarios / Empresas) */}
        <div className="flex h-[30px] w-[320px] items-center gap-4">
          {/* Usuarios */}
          <button
            type="button"
            onClick={() => onTabChange("usuarios")}
            className={cn(
              "flex h-[30px] w-[152px] items-center justify-center gap-[5px] rounded-[15px] px-[10px] py-2 text-[10px] leading-[14px] transition",
              tab === "usuarios"
                ? "bg-[#FF6600] text-white"
                : "bg-[#F5F5F5] text-[#242424]"
            )}
          >
            <Image
              src={tab === "usuarios" ? "/icons/user.svg" : "/icons/users.svg"}
              alt="Usuarios"
              width={12}
              height={12}
              className="h-[12px] w-[12px]"
            />
            <span>Usuarios</span>
          </button>

          {/* Empresas */}
          <button
            type="button"
            onClick={() => onTabChange("empresas")}
            className={cn(
              "flex h-[30px] w-[152px] items-center justify-center gap-[5px] rounded-[15px] px-[10px] py-2 text-[10px] leading-[14px] transition",
              tab === "empresas"
                ? "bg-[#FF6600] text-white"
                : "bg-[#F5F5F5] text-[#242424]"
            )}
          >
            <Image
              src={
                tab === "empresas"
                  ? "/icons/solicitud.svg"
                  : "/icons/company.svg"
              }
              alt="Empresas"
              width={12}
              height={12}
              className="h-[12px] w-[12px]"
            />
            <span>Empresas</span>
          </button>
        </div>

        {/* Input Buscar (322×45 con padding-left 16) */}
        <div className="flex h-[45px] w-[322px] items-center rounded-[15px] bg-[#F5F5F5] pr-2 pl-4">
          <Image
            src="/icons/search.svg"
            alt="Buscar"
            width={24}
            height={24}
            className="mr-[10px] opacity-60"
          />
          <input
            type="text"
            value={q}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Buscar"
            className="h-[45px] flex-1 bg-transparent text-[#242424] text-[16px] leading-[20px] outline-none placeholder:text-[#808080]"
          />
          {/* Botón cerrar (X) opcional */}
          {q.length > 0 && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="grid h-6 w-6 place-items-center rounded-full transition hover:bg-black/5"
              aria-label="Limpiar búsqueda"
            >
              <Image
                src="/icons/close.svg"
                alt="Cerrar"
                width={12}
                height={12}
                className="opacity-80"
              />
            </button>
          )}
        </div>

        {/* Chips filtros (215×30, gap 11.5px) */}
        <div className="flex h-[30px] w-[215px] items-center gap-[11.5px] self-start">
          <button
            type="button"
            onClick={() =>
              onFilterChange(filter === "active" ? null : "active")
            }
            className={cn(
              "flex h-[30px] w-[53px] items-center justify-center rounded-[15px] px-[10px] py-2 text-[10px] leading-[14px] transition",
              filter === "active"
                ? "bg-[#79B465] text-white"
                : "bg-[#F5F5F5] text-[#808080]"
            )}
          >
            Activos
          </button>

          <button
            type="button"
            onClick={() =>
              onFilterChange(filter === "inactive" ? null : "inactive")
            }
            className={cn(
              "flex h-[30px] w-[61px] items-center justify-center rounded-[15px] px-[10px] py-2 text-[10px] leading-[14px] transition",
              filter === "inactive"
                ? "bg-[#DCBD4C] text-white"
                : "bg-[#F5F5F5] text-[#808080]"
            )}
          >
            Inactivos
          </button>

          <button
            type="button"
            onClick={() =>
              onFilterChange(filter === "suspended" ? null : "suspended")
            }
            className={cn(
              "flex h-[30px] w-[78px] items-center justify-center rounded-[15px] px-[10px] py-2 text-[10px] leading-[14px] transition",
              filter === "suspended"
                ? "bg-[#BD2734] text-white"
                : "bg-[#F5F5F5] text-[#808080]"
            )}
          >
            Suspendidos
          </button>
        </div>
      </div>
    </div>
  );
}
