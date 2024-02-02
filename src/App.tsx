import {
    Container,
    ContentButton,
    Header,
    ModalStudyWords,
    ModalWord,
    UserManual,
    Words,
} from "./components";
import { useApp } from "./hooks/useApp";

export const App = () => {
    useApp();

    return (
        <Container>
            <Header />
            <ContentButton />
            <Words />
            <ModalWord />
            <ModalStudyWords />
            <UserManual />
        </Container>
    );
};
