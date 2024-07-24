import styles from "./Link.module.css";
import { ChevronRightIcon } from "../icons/chevronRightIcon";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

type LinkProps = PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;

export default function Link({ children, ...rest }: LinkProps) {
  return (
    <a className={styles.link} {...rest}>
      {children}
      <ChevronRightIcon />
    </a>
  );
}
