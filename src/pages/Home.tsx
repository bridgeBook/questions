import React, { useState } from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../data/questions";

const Home: React.FC = () => {
    const [search, setSearch] = useState("");
    const [randomQuestion, setRandomQuestion] = useState<string>(questions[0]);

    const filteredQuestions = questions.filter((q) =>
        q.toLowerCase().includes(search.toLowerCase())
    );

    const getRandomQuestion = () => {
        const random = questions[Math.floor(Math.random() * questions.length)];
        setRandomQuestion(random);
    };

    return (
        <div className="min-h-screen bg-yellow-50 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <Header
                    search={search}
                    onSearchChange={setSearch}
                    onRandomClick={getRandomQuestion}
                />

                {randomQuestion && (
                    <div className="p-6 bg-white border border-yellow-400 rounded-xl shadow-md">
                        <div className="text-base font-semibold text-yellow-700 mb-2">
                        🎲 選んだお題
                        </div>
                        <QuestionCard question={randomQuestion}/>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredQuestions.map((question, index) => (
                        <QuestionCard key={index} question={question} index={index} onClick={() => setRandomQuestion(question)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
