import Image from "next/image"
import EmptyPageImg from "../../icons/pngs/usedashboard.png"

interface Props {
    message: string
    description?: string
}

const EmptyPage:React.FC<Props> = ({ message, description }) => {
  return (
    <div className="flex justify-center items-center h-[80vh] flex-col">
        <Image src={EmptyPageImg} alt="empty page" className="md:w-5/12" />
        <p className="text-2xl text-color font-bold">{message}</p>
        <span className="text-lg">{description}</span>
    </div>
  )
}

export default EmptyPage
