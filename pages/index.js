import Quiz from "../components/Quiz";
import { QuizProvider } from "../contexts/quiz";

export default function Home() {
  return (
    <>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </>
  );
}
