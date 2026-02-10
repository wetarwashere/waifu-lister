import WaifuForm from "@/app/components/waifuForm"
import { getWaifuData } from "@/app/lib/db"
import { notFound } from "next/navigation"

const UpdatePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const target = parseInt(id)
  const waifuData = await getWaifuData()
  const waifu = waifuData.find(data => data.id === target)

  if (!waifu) {
    return notFound()
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center select-none">
      <WaifuForm initialData={waifu} />
    </div>
  )
}

export default UpdatePage
