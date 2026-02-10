"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { waifuDatabase, waifuDataLocal } from "./db"

const usingDatabase = process.env.USE_DATABASE === "true"

export async function saveWaifu(formData: FormData) {
  const waifuData = {
    nama: formData.get("nama") as string,
    linkGambar: formData.get("linkGambar") as string,
    umur: formData.get("umur") as string,
    ultah: formData.get("ultah") as string,
    asal: formData.get("asal") as string
  }

  if (usingDatabase) {
    await waifuDatabase.query(`INSERT INTO ${process.env.MYSQL_TABLE} (nama, linkGambar, umur, ultah, asal) VALUES (?, ?, ?, ?, ?)`, [waifuData.nama, waifuData.linkGambar, waifuData.umur, waifuData.ultah, waifuData.asal])
  } else {
    const newIdentifier = waifuDataLocal.length > 0 ? Math.max(...waifuDataLocal.map(waifu => waifu.id)) + 1 : 1
    waifuDataLocal.push({ id: newIdentifier, ...waifuData })
  }

  revalidatePath("/")
  redirect("/")
}

export async function delWaifu(id: number) {
  if (usingDatabase) {
    await waifuDatabase.query(`DELETE FROM ${process.env.MYSQL_TABLE} WHERE id = ?`, [id])
  } else {
    const dataIndex = waifuDataLocal.findIndex(waifu => waifu.id === id)

    if (dataIndex !== -1) waifuDataLocal.splice(dataIndex, 1)
  }

  revalidatePath("/")
}

export async function updateWaifu(id: number, formData: FormData) {
  const waifuData = {
    nama: formData.get("nama") as string,
    linkGambar: formData.get("linkGambar") as string,
    umur: formData.get("umur") as string,
    ultah: formData.get("ultah") as string,
    asal: formData.get("asal") as string
  }

  if (usingDatabase) {
    await waifuDatabase.query(`UPDATE ${process.env.MYSQL_TABLE} SET nama = ?, linkGambar = ?, umur = ?, ultah = ?, asal = ? WHERE id = ?`, [waifuData.nama, waifuData.linkGambar, waifuData.umur, waifuData.ultah, waifuData.asal, id])
  } else {
    const dataIndex = waifuDataLocal.findIndex(waifu => waifu.id === id)

    if (dataIndex !== -1) {
      waifuDataLocal[dataIndex] = { id, ...waifuData }
    }
  }

  revalidatePath("/")
  redirect("/")
}
