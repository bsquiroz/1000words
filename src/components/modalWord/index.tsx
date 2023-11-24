import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const ModalWord = () => {
	const { modalWord, setModalWord } = useStore((state) => state);
	return (
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
	);
};