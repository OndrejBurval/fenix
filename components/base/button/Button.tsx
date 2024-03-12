import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonColorVariant = "primary" | "secondary" | "inverse";
type ButtonSizeVariant = "sm" | "md" | "lg";

type Props = {
	children: ReactNode;
	variant?: ButtonColorVariant;
	size?: ButtonSizeVariant;
	loading?: boolean;
	disabled?: boolean;
	className?: string;
	attrs?: ButtonHTMLAttributes<HTMLButtonElement>;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const COLOR_VARIANT_CLASSES: Record<ButtonColorVariant, string> = {
	primary: styles[`cButton--primary`],
	secondary: styles[`cButton--secondary`],
	inverse: styles[`cButton--inverse`],
};

const SIZE_VARIANT_CLASSES: Record<ButtonSizeVariant, string> = {
	sm: styles[`cButton--sm`],
	md: styles[`cButton--md`],
	lg: styles[`cButton--lg`],
};

const Button = ({
	variant = "primary",
	size = "md",
	attrs = { type: "button" },
	loading,
	disabled,
	onClick,
	className,
	children,
}: Props) => {
	const buttonClass = [
		styles["cButton"],
		loading && styles["cButton--loading"],
		COLOR_VARIANT_CLASSES[variant],
		SIZE_VARIANT_CLASSES[size],
		className,
	].join(" ");

	return (
		<button
			onClick={onClick}
			className={buttonClass}
			{...attrs}
			disabled={disabled || loading}>
			{children}
		</button>
	);
};

export default Button;
