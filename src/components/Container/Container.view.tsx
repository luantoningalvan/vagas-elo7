import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Container.module.css";

type ContainerProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

export default function Container({ children, ...rest }: ContainerProps) {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
