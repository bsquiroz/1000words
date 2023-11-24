import { useEffect } from "react";
import { words as wordsData } from "./data/words";

import {
	Container,
	ContentButton,
	Header,
	ModalStudyWords,
	ModalWord,
	Words,
} from "./components";

import { useStore } from "./store";

export const App = () => {
	const { words, valuesIndexWord, setWordsCurrent, setWords } = useStore(
		(state) => state
	);

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

	return (
		<Container>
			<Header />
			<ContentButton />
			<Words />
			<ModalWord />
			<ModalStudyWords />
		</Container>
	);
};
