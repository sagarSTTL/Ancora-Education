import * as React from "react"
interface props {
  fill?: string
}
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11.274}
    height={20.048}
    viewBox="0 0 11.274 20.048"
    {...props}
  >
    <path
      fill="none"
      stroke={props.fill ? props.fill : "white"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m1.768 1.768 8.256 8.256-8.256 8.256"
    />
  </svg>
)

export default SvgComponent
