import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const Words = () => {
	const { wordsCurrent, setModalWord, wordStudy } = useStore(
		(state) => state
	);
	return (
		<ul className={cn("flex flex-col items-center gap-5 py-5")}>
			{wordsCurrent.map((word) => {
				const isWordInStageStudy = wordStudy.find(
					(w) => w.id === word.id
				);

				return (
					<li
						key={word.id}
						className={cn(
							"cursor-pointer hover:text-gray-400 text-2xl",
							{
								"text-green-500": isWordInStageStudy,
							}
						)}
						onClick={() => setModalWord(word)}
					>
						<span className="font-bold">{word.id + 1}.</span>{" "}
						<span className="tracking-widest capitalize ">
							{word.word}
						</span>
					</li>
				);
			})}
		</ul>
	);
};
