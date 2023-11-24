import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const ModalStudyWords = () => {
	const { isShowModalStuding, setIsModalStuding } = useStore(
		(state) => state
	);
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
			<div className="flex justify-end items-center gap-5">
				<h2>Palabras ha estudiar: 98</h2>
				<button
					className={cn("bg-red-500 py-2 px-5 rounded-md font-bold")}
					onClick={() => setIsModalStuding(false)}
				>
					Volver
				</button>
			</div>
		</section>
	);
};
