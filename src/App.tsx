import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import CardList from "./CardList";

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

const App: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addButtonHandler = (block: Block) => {
    setBlocks([...blocks, block]);
    setIsVisible(true);
  };

  const removeBlock = (id: number) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  return (
    <>
      <div className="page">
        <div className="container">
          <h2>Football Match Form</h2>
          <Form
            addButtonHandler={addButtonHandler}
          />
        </div>
        {isVisible && <CardList blocks={blocks} removeBlock={removeBlock} />}
      </div>
    </>
  );
};

export default App;