import style from "@/styles/components/_footer.module.scss";

export default function Footer() {
  const date = new Date;
  const year: number = date.getFullYear();

  return (
    <footer className={ style.footer_container } >
      <p>Poke<span>Next</span> &copy; {`${ year }`}</p>
    </footer>
  )
}