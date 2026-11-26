'use client'

import { KartuProfil } from "@/components/KartuProfil";

export default function Home() {
  return (
    <main className="halaman">
      <h1>Kartu Profil Interaktif</h1>
      <p>Latihan React hari pertama.</p>

      {/* Kartu Profil */}
      <KartuProfil nama="Agha" kelas="XII RPL 1" hobi="gooning" />
      <KartuProfil nama="Rakha" kelas="XII RPL 1" hobi="Gaming" />
      <KartuProfil nama="Zidan" kelas="XII RPL 1" hobi="Pacuan Waifu" />

    </main>
  );
}