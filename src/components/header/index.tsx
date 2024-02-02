import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const Header = () => {
    const words = useStore((state) => state.words);
    const setIsModalStuding = useStore((state) => state.setIsModalStuding);
    const wordStudy = useStore((state) => state.wordStudy);
    const setIsShowUserModal = useStore((state) => state.setIsShowUserManual);

    return (
        <section className="flex flex-wrap gap-5 justify-center sm:justify-end items-center">
            <h2 className={cn("font-bold text-center")}>
                Cantidad de palabras: {words.length} palabras
            </h2>
            <button
                className={cn(
                    "bg-green-500 border-transparent border-2 py-2 px-5 rounded-md font-bold flex gap-2",
                    "hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-all group"
                )}
                onClick={() => setIsModalStuding(true)}
            >
                Palabras guardadas
                <span
                    className={cn(
                        "inline-block w-6 h-6 bg-white text-green-500 rounded-full",
                        "group-hover:bg-green-500 group-hover:text-white"
                    )}
                >
                    {" "}
                    {wordStudy.length}
                </span>
            </button>
            <button
                onClick={() => setIsShowUserModal(true)}
                className=" w-10 h-10 rounded-full border-blue-500 border-2"
            >
                <i className="bx bx-question-mark text-2xl text-blue-500" />
            </button>
        </section>
    );
};
