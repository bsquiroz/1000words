import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

import { toast } from "react-toastify";

export const ModalWord = () => {
	const {
		modalWord,
		setModalWord,
		setWordStudy,
		isShowModalStuding,
		setModalStudyDelete,
		wordStudy,
	} = useStore((state) => state);

	const handleSaveWordStudy = () => {
		if (modalWord) {
			const foundWordInStudy = wordStudy.find(
				(word) => word.id === modalWord.id
			);

			if (foundWordInStudy)
				return toast.error("Esta palabra ya la tienes agregada", {
					position: "bottom-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

			setWordStudy(modalWord);
		}
		toast.success("Palabra agregada exitosamente", {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		setModalWord(null);
	};

	const handleWordDelete = () => {
		if (modalWord) {
			setModalStudyDelete(modalWord);
		}
		toast.info("Palabra Eliminada exitosamente", {
			position: "bottom-left",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		setModalWord(null);
	};

	return (
		<section
			className={cn(
				"z-50 fixed top-0 left-0 p-5 bg-slate-900/10 w-full h-full flex justify-center items-center backdrop-blur-sm",
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

				{isShowModalStuding ? (
					<button
						className="bg-red-500 w-[60%] py-2 px-3 rounded-md font-bold m-auto"
						onClick={handleWordDelete}
					>
						¿Ya la dominas? Bórrala.
					</button>
				) : (
					<button
						className="bg-green-500 w-[60%] py-2 px-3 rounded-md font-bold m-auto"
						onClick={handleSaveWordStudy}
					>
						¿No conocías esta palabra? guárdala.
					</button>
				)}
			</div>
		</section>
	);
};
