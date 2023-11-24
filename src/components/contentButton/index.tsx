import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const ContentButton = () => {
	const { valuesIndexWord, words, setValueIndexWord } = useStore(
		(state) => state
	);

	const handleValuesIndexWord = (type: string) => {
		if (type === "next") {
			if (valuesIndexWord.endWord >= words.length) return;
			setValueIndexWord({
				initWord: valuesIndexWord.initWord + 10,
				endWord: valuesIndexWord.endWord + 10,
			});
		} else {
			if (valuesIndexWord.initWord < 10) return;
			setValueIndexWord({
				initWord: valuesIndexWord.initWord - 10,
				endWord: valuesIndexWord.endWord - 10,
			});
		}
	};
	return (
		<div className={cn("flex gap-5 py-5")}>
			<button
				className={cn(
					" w-10 h-10 bg-blue-600 uppercase rounded-full flex justify-center items-center",
					{
						hidden: valuesIndexWord.initWord < 10,
					}
				)}
				onClick={() => handleValuesIndexWord("previous")}
			>
				<i className="bx bxs-left-arrow"></i>
			</button>

			<button
				className={cn(
					" w-10 h-10 bg-blue-600 uppercase rounded-full flex justify-center items-center",
					{
						hidden: valuesIndexWord.endWord >= words.length,
					}
				)}
				onClick={() => handleValuesIndexWord("next")}
			>
				<i className="bx bxs-right-arrow"></i>
			</button>
		</div>
	);
};
