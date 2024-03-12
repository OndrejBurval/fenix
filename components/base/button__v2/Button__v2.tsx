import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button__v2.module.scss";

type ButtonColorVariant = "primary" | "secondary" | "inverse";
type ButtonSizeVariant = "sm" | "md" | "lg";

type Props = {
	children?: ReactNode;
	variant?: ButtonColorVariant;
	size?: ButtonSizeVariant;
	attrs?: ButtonHTMLAttributes<HTMLButtonElement>;
	onClick?: () => void;
};

const Button = ({
	variant = "primary",
	size = "md",
	attrs = { type: "button" },
	onClick,
	children,
}: Props) => {
	const buttonClass = [styles["cButton"], styles[variant], styles[size]].join(
		" "
	);

	return (
		<button onClick={onClick} className={buttonClass} {...attrs}>
			{children}
		</button>
	);
};

export default Button;
