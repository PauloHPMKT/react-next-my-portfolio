import { ButtonMain } from "./Button.styles"

export default function Button({ children, onClick }) {
  return(
    <ButtonMain onClick={ onClick }>{ children }</ButtonMain>
  )
}