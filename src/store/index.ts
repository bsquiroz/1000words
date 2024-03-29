import { create } from "zustand";

import { Word } from "../interfaces";
import { words } from "../data/words";

import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface Store {
    words: Word[];
    wordsCurrent: Word[];
    modalWord: Word | null;
    valuesIndexWord: {
        initWord: number;
        endWord: number;
    };
    isShowModalStuding: boolean;
    wordStudy: Word[];
    isShowUserManual: boolean;
    setValueIndexWord: (value: { initWord: number; endWord: number }) => void;
    setWordsCurrent: (value: Word[]) => void;
    setModalWord: (value: Word | null) => void;
    setIsModalStuding: (value: boolean) => void;
    setWordStudy: (value: Word) => void;
    setModalStudyDelete: (value: Word) => void;
    setWords: (value: Word[]) => void;
    setIsShowUserManual: (value: boolean) => void;
}

export const useStore = create<Store>()(
    devtools(
        persist(
            (set) => ({
                words: words,
                modalWord: null,
                valuesIndexWord: {
                    initWord: 0,
                    endWord: 10,
                },
                wordsCurrent: words.slice(0, 10),
                isShowModalStuding: false,
                wordStudy: [],
                isShowUserManual: false,
                setValueIndexWord: (value) => set({ valuesIndexWord: value }),
                setWordsCurrent: (value) => set({ wordsCurrent: value }),
                setModalWord: (value) => set({ modalWord: value }),
                setIsModalStuding: (value) =>
                    set({ isShowModalStuding: value }),
                setWordStudy: (value) =>
                    set((state) => ({
                        wordStudy: [...state.wordStudy, value],
                    })),
                setModalStudyDelete: (value) =>
                    set((state) => ({
                        wordStudy: state.wordStudy.filter(
                            (word) => word.id !== value.id
                        ),
                    })),
                setWords: (value) => set({ words: value }),
                setIsShowUserManual: (value) =>
                    set({ isShowUserManual: value }),
            }),
            { name: "1000words" }
        )
    )
);
