import mysql, { RowDataPacket } from "mysql2/promise";

export interface BaseData {
  id: number
  nama: string
  linkGambar: string
  umur: string
  ultah: string
  asal: string
}

export interface WaifuData extends BaseData, RowDataPacket { }

export const waifuDatabase = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})
export const waifuDataLocal: BaseData[] = []
export const getWaifuData = async (): Promise<BaseData[] | WaifuData[]> => {
  const usingDatabase = process.env.USE_DATABASE === "true"

  if (!usingDatabase) {
    return waifuDataLocal
  }

  try {
    const [waifus] = await waifuDatabase.query<WaifuData[]>(`SELECT * FROM ${process.env.MYSQL_TABLE}`)
    return waifus
  } catch (error) {
    console.log("Error fetching data from database: ", error)
    return waifuDataLocal
  }
}
