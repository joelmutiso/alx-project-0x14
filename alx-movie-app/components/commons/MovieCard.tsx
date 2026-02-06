import { MovieProps } from "@/interfaces"
import Image from "next/image"

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="h-[563px]">
      <div>
        {/* Note: Next.js requires domain config for external images. See step 6 below. */}
        <Image 
          className="h-[430px] w-full rounded-md hover:cursor-pointer object-cover" 
          src={posterImage || '/placeholder.jpg'} // Fallback if image is missing
          width={300} 
          height={430} 
          alt={title} 
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold truncate pr-2">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  )
}

export default MovieCard