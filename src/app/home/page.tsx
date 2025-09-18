"use client";

import { useCallback, useMemo, useState } from "react";
import HomeCompanyList, {
  type HomeCompany,
} from "@/components/home/home-company-list";
import HomeTopSection from "@/components/home/home-top-section";
import HomeUserList, { type HomeUser } from "@/components/home/home-user-list";
import Navbar from "@/components/layout/navbar";
import StatusBar from "@/components/layout/statusbar";

type Status = "active" | "inactive" | "suspended";
type TabKey = "usuarios" | "empresas";
type NavKey = "home" | "moderation" | "notifications" | "profile";

const USERS: HomeUser[] = [
  {
    id: "1",
    name: "Sabrina Cooper",
    email: "sabri.cooper@gmail.com",
    status: "active",
  },
  {
    id: "2",
    name: "José Carlos",
    email: "josecarlos@gmail.com",
    status: "inactive",
  },
  {
    id: "3",
    name: "Sabrina Cooper",
    email: "sabri.cooper@gmail.com",
    status: "suspended",
  },
  {
    id: "4",
    name: "José Carlos",
    email: "josecarlos@gmail.com",
    status: "active",
  },
];

const COMPANIES: HomeCompany[] = [
  {
    id: "c1",
    name: "Perkys Admin",
    email: "contacto@perkys.com",
    status: "active",
  },
  {
    id: "c2",
    name: "Spark Racing",
    email: "spark@racing.com",
    status: "inactive",
  },
  {
    id: "c3",
    name: "Open Pass",
    email: "devs@openpass.com",
    status: "suspended",
  },
];

export default function Home() {
  const [tab, setTab] = useState<TabKey>("usuarios");
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Status | null>(null);
  const [nav, setNav] = useState<NavKey>("home");

  // util: filtra por texto y estado (memoizada para no romper exhaustive-deps)
  const filterList = useCallback(
    <T extends { name: string; email: string; status: Status }>(
      arr: T[],
      query: string,
      st: Status | null
    ) => {
      const ql = query.toLowerCase();
      const hit = (s: string) => s.toLowerCase().includes(ql);
      return arr.filter((item) => {
        const matchesText = hit(item.name) || hit(item.email);
        const matchesStatus = st ? item.status === st : true;
        return matchesText && matchesStatus;
      });
    },
    []
  );

  const filteredUsers = useMemo(
    () => filterList(USERS, q, filter),
    [q, filter, filterList]
  );
  const filteredCompanies = useMemo(
    () => filterList(COMPANIES, q, filter),
    [q, filter, filterList]
  );

  const handleTabChange = (t: TabKey) => {
    setTab(t);
    setQ("");
    setFilter(null);
  };

  const handleSuspendUser = (id: string) => {
    console.log("suspender usuario", id);
  };
  const handleSuspendCompany = (id: string) => {
    console.log("suspender empresa", id);
  };

  return (
    <main className="relative mx-auto h-[800px] w-[360px] overflow-hidden rounded-md bg-white shadow-md">
      <StatusBar />

      {/* Contenido: bloque superior + lista en flujo normal */}
      <div className="relative top-[44px] left-[20px] flex flex-col">
        <HomeTopSection
          tab={tab}
          onTabChange={handleTabChange}
          q={q}
          onQueryChange={setQ}
          filter={filter}
          onFilterChange={setFilter}
        />

        {/* separación controlada aquí */}
        <div className="mt-4">
          {tab === "usuarios" ? (
            <HomeUserList
              users={filteredUsers}
              onSuspendUser={handleSuspendUser}
            />
          ) : (
            <HomeCompanyList
              companies={filteredCompanies}
              onSuspendCompany={handleSuspendCompany}
            />
          )}
        </div>
      </div>

      <Navbar current={nav} onChange={setNav} />
    </main>
  );
}
