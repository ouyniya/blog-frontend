import { LoaderIcon } from "lucide-react"

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoaderIcon className="animate-spin text-sky-500"/>
    </div>
  )
}
export default LoadingSpinner