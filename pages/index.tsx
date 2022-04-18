import {NextPage} from "next";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="space-y-6">
        <h1 className="text-6xl">Standard Project Template</h1>
        <p className="text-3xl">This is my standard project starter template using:</p>
        <ul className="text-xl list-disc">
          <li>
            <Link href="https://www.framer.com/motion/">
              <a>Framer Motion</a>
            </Link>
          </li>
          <li>
            <Link href="https://headlessui.dev">
              <a>Headless UI</a>
            </Link>
          </li>
          <li>
            <Link href="https://nextjs.org">
              <a>Next.js</a>
            </Link>
          </li>
          <li>
            <Link href="https://sass-lang.com">
              <a>Sass</a>
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com">
              <a>TailwindCSS</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.typescriptlang.org">
              <a>TypeScript</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Index
