import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""} footer-responsive`}>
        <div class="footer-content">
          <nav class="footer-links">
            {Object.entries(links).map(([text, link]) => (
              <a href={link} class="footer-link">{text}</a>
            ))}
          </nav>
          <p class="footer-copyright">© Модуль Роста® 2010 — 2025</p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
