import { create } from "zustand";

import { Word } from "../interfaces";
import { words } from "../data/words";

type Store = {
	words: Word[];
	wordsCurrent: Word[];
	modalWord: Word | null;
	valuesIndexWord: {
		initWord: number;
		endWord: number;
	};
	isShowModalStuding: boolean;
	setValueIndexWord: (value: { initWord: number; endWord: number }) => void;
	setWordsCurrent: (value: Word[]) => void;
	setModalWord: (value: Word | null) => void;
	setIsModalStuding: (value: boolean) => void;
};

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
	setValueIndexWord: (value) => set({ valuesIndexWord: value }),
	setWordsCurrent: (value) => set({ wordsCurrent: value }),
	setModalWord: (value) => set({ modalWord: value }),
	setIsModalStuding: (value) => set({ isShowModalStuding: value }),
}));

console.log(JSON.parse(localStorage.getItem("wordsCurrent")!));
