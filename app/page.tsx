import styles from "./page.module.css";
import Button from "@/components/base/button/Button";

export default function Home() {
	return (
		<main className={styles.main}>
			<Button attrs={{ disabled: true }}>Primary</Button>
			<Button variant="secondary" disabled>
				Secondary
			</Button>
			<Button variant="inverse" loading>
				inverse
			</Button>
		</main>
	);
}
