import { ReactNode } from "react";

interface PaginaProps {
  children?: ReactNode;
}

export default function Pagina(props: PaginaProps) {
  return <div>{props.children}</div>;
}
