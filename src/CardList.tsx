import React from "react";

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

interface CardListProps {
  blocks: Block[];
  removeBlock: (id: number) => void;
}

const CardList: React.FC<CardListProps> = ({ blocks, removeBlock }) => {
  return (
    <div className="cardList">
      {blocks.map((block) => (
        <div key={block.id} className="card">
          <h2 className="cardTitle">Match Info:</h2>
          <label className="cardLabel">
            {block.firstTeam} - {block.secondTeam}
          </label>
          <label className="cardLabel">
            Number of tickets - "{block.tickets}"
          </label>
          <label className="cardLabel">Field - "{block.stadium}"</label>
          <button
            onClick={() => removeBlock(block.id)}
            className="deleteCardButton"
          >
            <span className="button-content">Delete</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
