import { useEffect } from "react";

import { Container } from "./components";
import { useStore } from "./store";
import { cn } from "./utils/cn.utility";

export const App = () => {
	const {
		words,
		wordsCurrent,
		valuesIndexWord,
		setValueIndexWord,
		setWordsCurrent,
		setModalWord,
		modalWord,
	} = useStore((state) => state);

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

	useEffect(() => {
		const { endWord, initWord } = valuesIndexWord;
		const wordAux = words.slice(initWord, endWord);

		setWordsCurrent(wordAux);
	}, [valuesIndexWord]);

	return (
		<Container>
			<h2 className={cn("font-bold text-end")}>
				Cantidad de palabras: {words.length} palabras
			</h2>
			<div className={cn("flex gap-5 py-5")}>
				<button
					className={cn("px-5 py-2 rounded-md bg-blue-600", {
						hidden: valuesIndexWord.initWord < 10,
					})}
					onClick={() => handleValuesIndexWord("previous")}
				>
					Atras
				</button>

				<button
					className={cn("px-5 py-2 rounded-md bg-blue-600", {
						hidden: valuesIndexWord.endWord >= words.length,
					})}
					onClick={() => handleValuesIndexWord("next")}
				>
					Siguiente
				</button>
			</div>
			<ul className={cn("flex flex-col items-center gap-5 py-5")}>
				{wordsCurrent.map((word) => (
					<li
						key={word.id}
						className={cn("cursor-pointer hover:text-gray-400")}
						onClick={() => setModalWord(word)}
					>
						<span>{word.id + 1}</span> {word.word}
					</li>
				))}
			</ul>

			<section
				className={cn(
					"fixed top-0 left-0 p-5 bg-slate-900/10 w-full h-full flex justify-center items-center backdrop-blur-sm",
					"opacity-0 invisible transition-all duration-200",
					{
						"visible opacity-100": modalWord,
					}
				)}
			>
				<div className="relative max-w-2xl bg-slate-800 p-5 rounded-md flex flex-col gap-3">
					<h2 className="text-2xl">
						{modalWord?.id! + 1}.{" "}
						<span className="font-bold">{modalWord?.word}</span> -{" "}
						{modalWord?.equal}
					</h2>
					<p>{modalWord?.defination}</p>

					<ul className="p-2">
						{modalWord?.phrases.map((phrase, i) => (
							<li key={i}>
								<span>{i + 1}.</span> {phrase}
							</li>
						))}
					</ul>

					<i
						className="absolute bx bxs-x-circle text-3xl text-red-500 top-1 right-1 cursor-pointer"
						onClick={() => setModalWord(null)}
					></i>
				</div>
			</section>
		</Container>
	);
};
