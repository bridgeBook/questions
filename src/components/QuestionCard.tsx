type QuestionCardProps = {
  question: string;
  index?: number;
  onClick?: () => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition duration-200 cursor-pointer h-32"
      onClick={onClick}
    >
      <div className="text-gray-700 text-base font-medium">{question}</div>
    </div>
  );
};

export default QuestionCard;