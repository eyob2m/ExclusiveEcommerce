
const SectionIntro = ({title,color}) => {
  return (
    <div className="flex items-center gap-[16px]">
        <div className={`w-[20px] h-[40px] rounded-lg bg-[${color}]`}></div>
        <h1 className={`font-Poppis font-[600] text-[1.6rem] text-[${color}]`}>{title}</h1>
    </div>
  )
}

export default SectionIntro