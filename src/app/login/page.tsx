"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/layout/statusbar";

export default function Login() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  // Estado controlado para el chip visual
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [pwdFocused, setPwdFocused] = useState(false);

  const showEmailChip = !emailFocused && email.length === 0;
  const showPwdChip = !pwdFocused && pwd.length === 0;

  const handleLogin = () => {
    // TODO: validar credenciales / llamar API
    router.push("/home"); // 👈 navega a Home
  };

  return (
    <section className="min-h-screen bg-background flex items-start justify-center antialiased">
      {/* Lienzo mobile 360×800 */}
      <div className="relative min-h-[800px] w-[360px] overflow-hidden rounded-md bg-white shadow-md">
        {/* Status bar (24px alto, naranja) */}
        <StatusBar />

        {/* Header naranja con gradiente (ancho/alto pares y centrado sin sub-píxeles) */}
        <div className="absolute top-[24px] left-1/2 h-[236px] w-[512px] -ml-[256px] rounded-b-[150px] bg-[linear-gradient(360deg,#FF6600_0%,#CC4902_100%)]" />

        {/* Logo */}
        <div className="absolute top-[24px] left-1/2 grid h-[236px] w-[512px] -ml-[256px] place-items-center">
          <Image
            src="/logo/logo-icon.svg"
            alt="Perkys"
            width={114}
            height={116}
            className="h-[116px] w-[114px]"
            priority
          />
        </div>

        {/* Card de login */}
        <div className="absolute top-[234px] left-[20px] min-h-[326px] w-[320px] rounded-[15px] bg-[#F5F5F5] px-5 py-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
          {/* Título y copy */}
          <div className="space-y-2">
            <h1 className="text-[14px] leading-[20px] font-medium text-[#242424]">
              Iniciar sesión
            </h1>
            <p className="text-[12px] leading-4 text-[#808080]">
              Accedé con la cuenta que te asignamos para gestionar tu empresa en
              Perkys.
            </p>
          </div>

          {/* Email */}
          <div className="relative mt-3">
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className="h-[50px] w-[280px] rounded-[15px] border border-[#808080] bg-[#F5F5F5] px-4 text-[14px] text-[#808080] outline-[F5F5F5]"
            />
            {/* Chip EMAIL */}
            {showEmailChip && (
              <div
                aria-hidden
                className="pointer-events-none absolute left-4 right-4 top-1/2 -translate-y-1/2 flex h-[26px] select-none items-center rounded-[15px] bg-[#F5F5F5] px-[10px]"
              >
                <span className="text-[16px] leading-5 text-[#808080]">
                  Correo electrónico
                </span>
              </div>
            )}
          </div>

          {/* Password */}
          <div className="relative mt-3">
            <input
              id="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocused(true)}
              onBlur={() => setPwdFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin(); // enter para enviar
              }}
              className="h-[50px] w-[280px] rounded-[15px] border border-[#808080] bg-[#F5F5F5] px-4 pr-10 text-[14px] text-[#808080] outline-[F5F5F5]"
            />
            {/* Chip PASSWORD */}
            {showPwdChip && (
              <div
                aria-hidden
                className="pointer-events-none absolute left-4 right-10 top-1/2 -translate-y-1/2 flex h-[26px] select-none items-center rounded-[15px] bg-[#F5F5F5] px-[10px]"
              >
                <span className="text-[16px] leading-5 text-[#808080]">
                  Contraseña
                </span>
              </div>
            )}

            {/* Botón de mostrar/ocultar */}
            <button
              type="button"
              onClick={() => setShow((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1"
              aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              <Image
                src={show ? "/icons/ojo.svg" : "/icons/ojo-off.svg"}
                alt={show ? "Ocultar" : "Mostrar"}
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Link botón */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => console.log("Olvidaste tu contraseña")}
              className="cursor-pointer text-[14px] leading-[20px] font-medium text-[#242424] transition hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botón principal */}
          <button
            type="button"
            onClick={handleLogin} // 👈 navegación
            className="mt-3 h-[44px] w-[280px] rounded-[15px] bg-[#FF6600] text-[16px] font-medium text-white transition hover:bg-[#ff6f12] active:scale-[0.99]"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </section>
  );
}
