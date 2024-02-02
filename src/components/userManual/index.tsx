import { useEffect } from "react";
import { useStore } from "../../store";
import { cn } from "../../utils/cn.utility";

export const UserManual = () => {
    const isShowUserManual = useStore((state) => state.isShowUserManual);
    const setIsShowUserManual = useStore((state) => state.setIsShowUserManual);

    const handleClick = () => {
        setIsShowUserManual(false);
    };

    useEffect(() => {
        const isWatchUserManual = JSON.parse(
            localStorage.getItem("isWatchUserManual")!
        );

        if (!isWatchUserManual) {
            setIsShowUserManual(true);
            localStorage.setItem("isWatchUserManual", JSON.stringify(true));
        }
    }, []);

    return (
        <section
            className={cn(
                "bg-black/60 fixed top-0 left-0 w-full h-full p-5",
                "opacity-0 invisible transition-all duration-200",
                "flex justify-center items-center",
                {
                    "visible opacity-100": isShowUserManual,
                }
            )}
        >
            <div className="w-[500px] h-[300px] relative">
                <i
                    className="bx bx-x-circle text-4xl absolute top-[-1rem] right-[-1rem] cursor-pointer text-red-500"
                    onClick={handleClick}
                ></i>
                {isShowUserManual && (
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/MbUDckATH0Q?si=NJoVF32OzxA-8-4_"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </section>
    );
};
