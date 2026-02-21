import clsx from "clsx"

export default function Button({ title, image, containerClass, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group relative flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 font-robert-medium text-sm uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95",
        containerClass
      )}
    >
      {image && <img src={image} alt="" className="w-4 shrink-0" />}
      <span className="relative inline-block overflow-hidden">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full group-hover:skew-y-12">
          {title}
        </span>
        <span className="absolute inset-0 translate-y-full skew-y-12 transition-transform duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>
    </button>
  )
}