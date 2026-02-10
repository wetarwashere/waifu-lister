"use client"

type WaifuDataType = WaifuData | BaseData

interface WaifuFormDatas {
  initialData?: WaifuDataType
}

import { saveWaifu, updateWaifu } from "../lib/action"
import { BaseData, WaifuData } from "../lib/db"

export default function WaifuForm({ initialData }: WaifuFormDatas) {
  const formAction = initialData ? updateWaifu.bind(null, initialData.id) : saveWaifu

  return (
    <form action={formAction} className="bg-black flex flex-col justify-center items-center w-210 h-fit p-15 border-white border-3 gap-12" >
      <h1 className="text-white text-6xl font-bold">
        {!initialData ? "Waifu Input" : "Update Waifu"}
      </h1>
      <div className="bg-gray-800 flex flex-col justify-center items-center w-fit h-fit gap-8 px-16 py-14 border-white border-3">
        <input required type="text" placeholder="Nama karakter" name="nama" className="text-2xl focus:border-white focus:border-3 bg-gray-600 p-4 font-bold text-white focus:bg-gray-700 hover:bg-gray-700 outline-none" defaultValue={initialData?.nama || ""} />
        <input required type="text" placeholder="Link gambar dari karakter" name="linkGambar" className="text-2xl bg-gray-600 focus:border-white focus:border-3 p-4 font-bold hover:bg-gray-700 focus:bg-gray-700 text-white outline-none" defaultValue={initialData?.linkGambar || ""} />
        <input required type="text" placeholder="Umur karakter" name="umur" className="text-2xl p-4 bg-gray-600 font-bold text-white focus:border-white focus:border-3 focus:bg-gray-700 hover:bg-gray-700 outline-none" defaultValue={initialData?.umur || ""} />
        <input required type="text" placeholder="Ultah karakter" name="ultah" className="text-2xl p-4 bg-gray-600 font-bold text-white focus:border-white focus:bg-gray-700 hover:bg-gray-700 focus:border-3 outline-none" defaultValue={initialData?.ultah || ""} />
        <input required type="text" placeholder="Asal karakter" name="asal" className="text-2xl p-4 bg-gray-600 hover:bg-gray-700 font-bold text-white focus:bg-gray-700 focus:border-white focus:border-3 outline-none" defaultValue={initialData?.asal || ""} />
      </div>
      <button className="text-3xl text-white border-white border-3 px-20 py-4 bg-gray-800 hover:text-gray-300 hover:bg-gray-900 cursor-pointer transition ease-out duration-150 font-bold">
        {initialData ? "Update" : "Submit"}
      </button>
    </form >
  )
}
