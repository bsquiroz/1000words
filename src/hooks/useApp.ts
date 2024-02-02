import { useEffect } from "react";
import { useStore } from "../store";

import { words as wordsData } from "../data/words";

export const useApp = () => {
    const words = useStore((state) => state.words);
    const valuesIndexWord = useStore((state) => state.valuesIndexWord);
    const setWordsCurrent = useStore((state) => state.setWordsCurrent);
    const setWords = useStore((state) => state.setWords);

    useEffect(() => {
        const { endWord, initWord } = valuesIndexWord;

        if (initWord !== 0 && endWord > 10) {
            const wordAux = words.slice(initWord, endWord);
            setWordsCurrent(wordAux);
        } else {
            const wordAux = words.slice(0, 10);
            setWordsCurrent(wordAux);
        }
    }, [valuesIndexWord]);

    useEffect(() => {
        if (
            wordsData.length !==
            JSON.parse(localStorage.getItem("1000words")!).state.words.length
        ) {
            setWords(wordsData);
        }
    }, []);
};
