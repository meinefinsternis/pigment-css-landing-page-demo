import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-and-mount-button/pigment-css">Pigment CSS</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/css-modules">CSS modules</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/styled-components">
            Styled Components
          </Link>
        </li>
        <li>
          <Link href="create-and-mount-button/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/baseline">Baseline</Link>
        </li>
      </ul>
    </div>
  );
}
