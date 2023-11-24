import { cn } from "../../utils/cn.utility";

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export const Container = ({ children }: Props) => {
	return (
		<main className={cn("dark:bg-slate-900 text-white min-h-screen p-5")}>
			<section className={cn("max-w-7xl m-auto")}>{children}</section>
		</main>
	);
};
