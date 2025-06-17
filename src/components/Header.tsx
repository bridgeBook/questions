import React from "react";

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onRandomClick: () => void;
};

const Header: React.FC<HeaderProps> = ({
  search,
  onSearchChange,
  onRandomClick,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="🔍 質問を検索する"
        className="w-full sm:w-2/3 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
      />
      <button
        onClick={onRandomClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-xl shadow transition"
      >
        🎲 ランダムで選ぶ
      </button>
    </div>
  );
};

export default Header;
