"use client"

import Image from "next/image";
import Link from "next/link"
import MasonryGrid from "../masonryGrid";
import { delWaifu } from "../../lib/action"
import { BaseData, WaifuData } from "../../lib/db"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Trash, ImageIcon, Plus, Pencil, RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation";

const Card = ({ waifus }: { waifus: WaifuData[] | BaseData[] }) => {
  const isEmpty = waifus.length <= 0
  const router = useRouter()

  return (
    <ContextMenu>
      <ContextMenuTrigger className="min-h-dvh w-full block">
        {isEmpty && (
          <div className="flex flex-col items-center justify-center h-dvh w-full gap-8 select-none">
            <h1 className="text-white font-bold text-8xl">Belum Ada Waifu</h1>
            <h1 className="text-gray-300 font-bold text-2xl">Karbitkan Satu Dulu Kink!</h1>
          </div>
        )}

        <MasonryGrid>
          {waifus.map(waifu => (
            <ContextMenu key={waifu?.id}>
              <ContextMenuTrigger>
                <div className="bg-black flex flex-col p-3 w-full h-fit border-white border-3 mb-4">
                  <Image src={decodeURI(waifu?.linkGambar)} alt={`Image for ${waifu?.nama}`} width={310} height={310} draggable={false} className="w-full cursor-pointer transition ease-out duration-200 hover:scale-102" onClick={() => window.open(waifu?.linkGambar)} />
                  <div className="bg-gray-800 flex flex-col p-4 gap-1">
                    <h1 className="text-white font-bold text-2xl w-max-50 truncate">
                      Nama: <Link target="_blank" href={`https://google.com/search?q=${waifu?.nama}+${waifu?.asal}`} className="text-white hover:text-gray-300 transition ease-out duration-150 font-bold text-2xl w-max-50 truncate">
                        {waifu?.nama}
                      </Link>
                    </h1>
                    <h1 className="text-white font-bold text-2xl">Umur: {waifu?.umur}</h1>
                    <h1 className="text-white font-bold text-2xl">Ultah: {waifu?.ultah}</h1>
                    <h1 className="text-white font-bold text-2xl w-max-50 truncate">
                      Asal: <Link target="_blank" href={`https://google.com/search?q=${waifu?.asal}`} className="text-white hover:text-gray-300 transition ease-out duration-150 font-bold text-2xl w-max-50 truncate">
                        {waifu?.asal}
                      </Link>
                    </h1>
                  </div>
                </div>
              </ContextMenuTrigger>

              <ContextMenuContent className="text-white bg-black border-white border-3 font-bold w-80 h-fit p-2 flex flex-col justify-center rounded-none transition duration-150 ease-out">
                <ContextMenuItem onClick={() => window.open(waifu?.linkGambar)} className="rounded-none transition duration-150 ease-out text-2xl p-3 cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <ImageIcon className="size-8 text-current" />
                    Lihat Gambar
                  </div>
                </ContextMenuItem>
                <ContextMenuItem onClick={() => router.push("/new")} className="rounded-none transition duration-150 ease-out text-2xl p-3 cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <Plus className="size-8 text-current" />
                    Tambah Data
                  </div>
                </ContextMenuItem>
                <ContextMenuItem onClick={() => router.push(`/update/${waifu?.id}`)} className="rounded-none transition duration-150 ease-out text-2xl p-3 cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <Pencil className="size-8 text-current" />
                    Perbarui Data
                  </div>
                </ContextMenuItem>
                <ContextMenuItem onClick={async () => {
                  if (confirm("Hapus waifu ini?")) await delWaifu(waifu?.id)
                }} className="rounded-none text-red-600 focus:text-white focus:bg-red-600 transition duration-150 ease-out text-2xl p-3 cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <Trash className="size-8 text-current" />
                    Hapus Data
                  </div>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </MasonryGrid>
      </ContextMenuTrigger>

      <ContextMenuContent className="text-white bg-black border-white border-3 font-bold w-80 h-fit p-2 flex flex-col justify-center rounded-none transition duration-150 ease-out">
        <ContextMenuItem onClick={() => router.push("/new")} className="rounded-none transition duration-150 ease-out text-2xl p-3 cursor-pointer">
          <div className="flex flex-row gap-4">
            <Plus className="size-8 text-current" />
            Tambah Data
          </div>
        </ContextMenuItem>
        <ContextMenuItem onClick={() => window.location.reload()} className="rounded-none transition duration-150 ease-out text-2xl p-3 cursor-pointer">
          <div className="flex flex-row gap-4">
            <RefreshCw className="size-8 text-current mt-1" />
            Refresh Halaman
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default Card
