"use client";

import Image from "next/image";

export type RequestItem = {
  id: string;
  name: string;
  category: string;
  email: string;
  avatarUrl?: string;
  status: "Pendiente" | "Aprobado" | "Rechazado";
};

interface Props {
  items: RequestItem[];
  onClickItem?: (id: string) => void;
}

export default function RequestsList({ items, onClickItem }: Props) {
  return (
    <section className="w-[320px]">
      <div className="flex w-[320px] flex-col items-start gap-[10px]">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => onClickItem?.(it.id)}
            className="flex h-[78px] w-[320px] flex-col items-start gap-[10px] rounded-[15px] bg-[#F5F5F5] px-[10px] py-[15px]"
          >
            <div className="flex h-[48px] w-[300px] flex-row items-center justify-between">
              <div className="flex h-[48px] w-[218px] flex-row items-start gap-[10px]">
                {/* Avatar */}
                <div className="h-[37px] w-[37px] overflow-hidden rounded-[8px] bg-white">
                  {it.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={it.name}
                      src={it.avatarUrl}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-neutral-200" />
                  )}
                </div>

                {/* Datos */}
                <div className="flex h-[48px] w-[171px] flex-col">
                  <div className="flex h-[20px] w-[171px] flex-row items-center gap-[10px]">
                    <p className="max-w-[94px] truncate text-[14px] font-normal leading-[20px] text-[#242424]">
                      {it.name}
                    </p>
                    <span className="flex h-[20px] w-[67px] items-center justify-center rounded-[15px] bg-[#79B465] px-[10px] py-[3px] text-[10px] font-normal leading-[14px] text-white">
                      {it.status}
                    </span>
                  </div>

                  <p className="mt-[2px] max-w-[171px] truncate text-[10px] font-normal leading-[14px] text-[#808080]">
                    {it.category}
                  </p>
                  <p className="max-w-[171px] truncate text-[10px] font-normal leading-[14px] text-[#808080]">
                    {it.email}
                  </p>
                </div>
              </div>

              {/* Chevron */}
              <div className="grid h-6 w-6 place-items-center">
                <Image
                  src="/icons/chevron.svg"
                  alt="Chevron"
                  width={18}
                  height={12}
                  priority
                  className="h-[12px] w-[18px]"
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
