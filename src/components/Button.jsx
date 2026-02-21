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
      {image && (
        <img
          src={image}
          alt=""
          className="w-4 shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
        />
      )}
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
        {title}
      </span>
    </button>
  )
}
