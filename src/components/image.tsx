
import { CustomComponentProps } from '../interfaces/page.interface'
import { mergeClassName } from '../utils'
import movie_img from '../img/movie.jpg'

interface Props extends CustomComponentProps {
  src: string
}

export const Image = (props: Props) => {
  return (
    <div
      className={mergeClassName(
        'bg-primary h-full w-full rounded-lg overflow-hidden',
        props.className
      )}
    >
      <img
        src={movie_img}
        className="min-h-[200px] w-full h-full object-cover"
      ></img>
    </div>
  )
}