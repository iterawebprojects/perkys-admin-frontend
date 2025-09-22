"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import StatusBar from "@/components/layout/statusbar";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  // Mock de datos
  const data = {
    owner: { name: "Marcos Mojes", email: "marcos.mojes@gmail.com" },
    biz: {
      name: "Mundo Mágico",
      category: "Juguetes, Niños y Bebés",
      logo: "logo.png",
    },
    branch: {
      name: "Mundo Mágico",
      address: "Pje Padilla",
      phone: "3514976512",
      email: "mundomagicoof@gmail.com",
      schedule1: "Lun a Vie 9:00 a 18:00",
      schedule2: "Sáb 10:00 a 16:00",
    },
    branch2: {
      name: "Mundo Mágico",
      address: "Pje Padilla",
      phone: "3514976512",
      email: "mundomagicoof@gmail.com",
      schedule1: "Lun a Vie 9:00 a 18:00",
      schedule2: "Sáb 10:00 a 16:00",
    },
  };

  return (
    <section className="min-h-screen bg-background flex items-start justify-center antialiased overflow-x-hidden">
      {/* Lienzo 360×800 */}
      <div className="relative h-[800px] w-[360px] overflow-hidden rounded-[20px] bg-white shadow-md">
        <StatusBar />

        {/* Contenido absoluto scrolleable (24px desde arriba) */}
        <div className="absolute left-0 top-[24px] flex h-[828px] w-[360px] flex-col items-center gap-[20px] overflow-y-auto overflow-x-hidden">
          {/* header 62px */}
          {/* header 62px (sticky) */}
          <header
            className="
    sticky top-0 z-20
    flex h-[62px] w-[360px] flex-col items-start gap-[10px]
    bg-white px-5 py-[19px]
    shadow-[0_4px_10px_rgba(0,0,0,0.25)]
  "
          >
            <div className="flex h-6 w-[320px] items-center gap-[10px]">
              <button
                type="button"
                onClick={() => router.back()}
                className="grid h-6 w-6 place-items-center"
                aria-label="Volver"
              >
                {/* Flecha 16×12 como la dejaste */}
                <Image
                  src="/icons/arrow.svg"
                  alt="Volver"
                  width={16}
                  height={12}
                  className="h-[12px] w-[16px]"
                  priority
                />
              </button>
              <h1 className="text-[16px] font-bold leading-6 text-[#242424]">
                Solicitud
              </h1>
            </div>
          </header>

          {/* Card: Datos del dueño (146px alto en Figma) */}
          <CardSection title="Datos del dueño">
            <div className="flex w-[280px] flex-col gap-[10px]">
              <Row label="Nombre" value={data.owner.name} />
              <Row label="Email" value={data.owner.email} />
            </div>
          </CardSection>

          {/* Card: Datos del negocio (172px) */}
          <CardSection title="Datos del negocio">
            <div className="flex w-[280px] flex-col gap-[10px]">
              <Row label="Nombre" value={data.biz.name} />
              <Row label="Rubro" value={data.biz.category} />
              <Row label="Logo" value={data.biz.logo} underlineValue />
            </div>
          </CardSection>

          {/* Cards: Datos de sucursales (2) */}
          <SucursalCard title="Datos de sucursales" {...data.branch} />
          <SucursalCard title="Datos de sucursales" {...data.branch2} />

          {/* Acciones (título + 2 tarjetas chicas) */}
          <div className="w-[320px]">
            <h3 className="text-[16px] font-bold leading-6 text-[#242424] mb-5">
              Acciones
            </h3>

            <div className="mt-[10px] flex h-[58px] w-[320px] items-center gap-4">
              {/* Rechazar */}
              <div className="flex h-[58px] w-[152px] flex-col items-start rounded-[15px] bg-[#F5F5F5] p-[10px_15px] shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="flex h-6 w-[124px] items-center">
                  <span className="text-[16px] font-bold leading-6 text-[#BD2734]">
                    Rechazar
                  </span>
                </div>
                <span className="text-[10px] leading-[14px] text-[#808080]">
                  Datos inválidos
                </span>
              </div>

              {/* Aprobar */}
              <div className="flex h-[58px] w-[152px] flex-col items-start rounded-[15px] bg-[#F5F5F5] p-[10px_15px] shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="flex h-6 w-[124px] items-center">
                  <span className="text-[16px] font-bold leading-6 text-[#FF6600]">
                    Aprobar
                  </span>
                </div>
                <span className="text-[10px] leading-[14px] text-[#808080]">
                  Activar cuenta
                </span>
              </div>
            </div>
          </div>

          {/* Respiro inferior (evita sensación de corte y solapes) */}
          <div className="mb-20" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function CardSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[320px] flex-col items-start gap-[10px] rounded-[15px] bg-[#F5F5F5] px-5 py-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
      <div className="flex w-[280px] flex-col items-start gap-5">
        <h2 className="text-[16px] font-bold leading-6 text-[#242424]">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  underlineValue,
}: {
  label: string;
  value: string;
  underlineValue?: boolean;
}) {
  return (
    <div className="flex h-4 w-[280px] items-center justify-between">
      <span className="text-[12px] leading-4 text-[#808080]">{label}</span>
      <span
        className={`text-[12px] leading-4 text-[#242424] ${
          underlineValue ? "underline" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function SucursalCard({
  title,
  name,
  address,
  phone,
  email,
  schedule1,
  schedule2,
}: {
  title: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  schedule1: string;
  schedule2: string;
}) {
  return (
    <CardSection title={title}>
      <div className="flex w-[280px] flex-col gap-[10px]">
        <Row label="Nombre" value={name} />
        <Row label="Dirección" value={address} />
        <Row label="Teléfono" value={phone} />
        <Row label="Email" value={email} />
        {/* Horario */}
        <div className="flex w-[280px] items-start justify-between">
          <span className="text-[12px] leading-4 text-[#808080]">Horario</span>
          <div className="flex w-[118px] flex-col items-end gap-[1px]">
            <span className="text-[12px] leading-4 text-[#242424]">
              {schedule1}
            </span>
            <span className="text-[12px] leading-4 text-[#242424]">
              {schedule2}
            </span>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
