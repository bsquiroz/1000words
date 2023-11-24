import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const Header = () => {
	const { words, setIsModalStuding, wordStudy } = useStore((state) => state);

	return (
		<section className="flex gap-5 justify-end items-center">
			<h2 className={cn("font-bold text-center")}>
				Cantidad de palabras: {words.length} palabras
			</h2>
			<button
				className={cn(
					"bg-green-500 py-2 px-5 rounded-md font-bold flex gap-2"
				)}
				onClick={() => setIsModalStuding(true)}
			>
				Palabras guardadas
				<span className="inline-block w-6 h-6 bg-white text-green-500 rounded-full">
					{" "}
					{wordStudy.length}
				</span>
			</button>
		</section>
	);
};
