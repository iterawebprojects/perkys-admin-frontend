"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  mainTab: "solicitudes" | "reportes";
  onMainTabChange: (v: "solicitudes" | "reportes") => void;
  statusTab: "pending" | "finished";
  onStatusTabChange: (v: "pending" | "finished") => void;
};

export default function ModerationTopSection({
  mainTab,
  onMainTabChange,
  statusTab,
  onStatusTabChange,
}: Props) {
  return (
    // Contenedor superior: 322 × 151.58 (Figma)
    <section className="flex w-[322px] flex-col items-center gap-[10px] h-[151.58px]">
      {/* Logotipo */}
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

      {/* Título + Tabs */}
      <div className="flex h-[122px] w-[322px] flex-col items-start gap-[19px]">
        {/* Título */}
        <div className="flex h-[24px] w-[153px] flex-row items-start gap-[5px]">
          <span className="h-[24px] w-[102px] text-center font-['Ubuntu'] text-[18px] font-bold leading-6 text-[#242424]">
            Moderación
          </span>
        </div>

        {/* Tabs principales */}
        <Tabs
          value={mainTab}
          onValueChange={(v) =>
            onMainTabChange(v as "solicitudes" | "reportes")
          }
          className="w-[320px] h-[30px]"
        >
          <TabsList className="flex h-[30px] w-[320px] items-center gap-[16px] p-0 bg-transparent">
            {/* Tab: Solicitudes */}
            <TabsTrigger
              value="solicitudes"
              className="
                flex h-[30px] w-[152px] items-center justify-center gap-[5px] rounded-[15px] px-[10px]
                text-[10px] leading-[14px] font-normal shadow-none border-0
                data-[state=active]:!bg-[#FF6600] data-[state=active]:!text-white
                data-[state=inactive]:!bg-[#F5F5F5] data-[state=inactive]:!text-[#242424]
              "
            >
              <Image
                src={
                  mainTab === "solicitudes"
                    ? "/icons/solicitud.svg"
                    : "/icons/company.svg"
                }
                alt="Solicitudes"
                width={12}
                height={12}
                priority
                className="h-[12px] w-[12px]"
              />
              Solicitudes
            </TabsTrigger>

            {/* Tab: Reportes */}
            <TabsTrigger
              value="reportes"
              className="
                flex h-[30px] w-[152px] items-center justify-center gap-[5px] rounded-[15px] px-[10px]
                text-[10px] leading-[14px] font-normal shadow-none border-0
                data-[state=active]:!bg-[#FF6600] data-[state=active]:!text-white
                data-[state=inactive]:!bg-[#F5F5F5] data-[state=inactive]:!text-[#242424]
              "
            >
              <Image
                src={
                  mainTab === "reportes"
                    ? "/icons/report.svg"
                    : "/icons/reporte.svg"
                }
                alt="Reportes"
                width={12}
                height={12}
                priority
                className="h-[12px] w-[12px]"
              />
              Reportes
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Tabs secundarios */}
        <div className="flex h-[30px] w-[148.5px] items-center gap-[11.5px] p-0">
          <button
            type="button"
            onClick={() => onStatusTabChange("pending")}
            className={`flex h-[30px] w-[71px] items-center justify-center rounded-[15px] px-[10px] text-[10px] leading-[14px] ${
              statusTab === "pending"
                ? "bg-[#79B465] text-white"
                : "bg-[#F5F5F5] text-[#808080]"
            }`}
          >
            Pendientes
          </button>
          <button
            type="button"
            onClick={() => onStatusTabChange("finished")}
            className={`flex h-[30px] w-[66px] items-center justify-center rounded-[15px] px-[10px] text-[10px] leading-[14px] ${
              statusTab === "finished"
                ? "bg-[#79B465] text-white"
                : "bg-[#F5F5F5] text-[#808080]"
            }`}
          >
            Finalizado
          </button>
        </div>
      </div>
    </section>
  );
}
