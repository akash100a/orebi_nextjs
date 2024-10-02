import Link from "next/link"

const FootLi = ({liText,to,className}) => {
  return (
    <>
        <li>
            <Link  className={`capitalize font-normal text-sm leading-[164%] text-[#6d6d6d] font-dm ${className}`} href={to}>{liText}</Link>
        </li>
    </>
  )
}

export default FootLi