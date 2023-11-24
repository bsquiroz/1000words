import { Word } from "../../interfaces";
import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const ModalStudyWords = () => {
	const { isShowModalStuding, setIsModalStuding, wordStudy, setModalWord } =
		useStore((state) => state);

	const handleShowWordStudy = (word: Word) => {
		setModalWord(word);
	};

	return (
		<section
			className={cn(
				"bg-slate-900 fixed top-0 left-0 w-full h-full p-5",
				"opacity-0 invisible transition-all duration-200",
				{
					"visible opacity-100": isShowModalStuding,
				}
			)}
		>
			<div className="flex justify-end items-center gap-5 pb-5">
				<h2>
					Palabras ha estudiar:{" "}
					<span className="font-bold text-2xl">
						{wordStudy.length}
					</span>
				</h2>
				<button
					className={cn("bg-red-500 py-2 px-5 rounded-md font-bold")}
					onClick={() => setIsModalStuding(false)}
				>
					Volver
				</button>
			</div>

			<ul className="flex gap-5 flex-wrap max-w-2xl m-auto ">
				{wordStudy.map((word) => (
					<li
						className={cn(
							"border-2 border-green-500 px-5 py-2 rounded-md cursor-pointer font-bold",
							"hover:bg-green-500 transition-all flex-1 text-center"
						)}
						key={word.id}
						onClick={() => handleShowWordStudy(word)}
					>
						{word.word}
					</li>
				))}
			</ul>
		</section>
	);
};
