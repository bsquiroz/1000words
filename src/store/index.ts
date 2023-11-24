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
	setValueIndexWord: (value: { initWord: number; endWord: number }) => void;
	setWordsCurrent: (value: Word[]) => void;
	setModalWord: (value: Word | null) => void;
	setIsModalStuding: (value: boolean) => void;
	setWordStudy: (value: Word) => void;
	setModalStudyDelete: (value: Word) => void;
}

export const useStore = create<Store>()((set) => ({
	words: words,
	modalWord: null,
	valuesIndexWord: JSON.parse(localStorage.getItem("valuesIndexWord")!) || {
		initWord: 0,
		endWord: 10,
	},
	wordsCurrent:
		JSON.parse(localStorage.getItem("wordsCurrent")!) || words.slice(0, 10),
	isShowModalStuding: false,
	wordStudy: JSON.parse(localStorage.getItem("wordStudy")!) || [],
	setValueIndexWord: (value) => set({ valuesIndexWord: value }),
	setWordsCurrent: (value) => set({ wordsCurrent: value }),
	setModalWord: (value) => set({ modalWord: value }),
	setIsModalStuding: (value) => set({ isShowModalStuding: value }),
	setWordStudy: (value) =>
		set((state) => ({ wordStudy: [...state.wordStudy, value] })),
	setModalStudyDelete: (value) =>
		set((state) => ({
			wordStudy: state.wordStudy.filter((word) => word.id !== value.id),
		})),
}));
