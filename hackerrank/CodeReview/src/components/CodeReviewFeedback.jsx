import React from "react";

const Item = (props) => {
  const [upvote, setUpvote] = React.useState(0);
  const [downvote, setDownvote] = React.useState(0);

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>{props.name}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button
              className="py-10 px-15"
              data-testid={`upvote-btn-${props.index}`}
              onClick={() => setUpvote((upvote) => upvote + 1)}
            >
              👍 Upvote
            </button>
            <button
              className="py-10 px-15 danger"
              data-testid={`downvote-btn-${props.index}`}
              onClick={() => setDownvote((downvote) => downvote + 1)}
            >
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${props.index}`}>
            Upvotes: <strong>{upvote}</strong>
          </p>
          <p
            className="my-10 mx-0"
            data-testid={`downvote-count-${props.index}`}
          >
            Downvotes: <strong>{downvote}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

const ITEMS = [
  { id: 0, name: "Readability" },
  { id: 1, name: "Performance" },
  { id: 2, name: "Security" },
  { id: 3, name: "Documentation" },
  { id: 4, name: "Testing" },
];

const FeedbackSystem = () => {
  return (
    <>
      {ITEMS.map((item) => {
        return <Item key={item.id} name={item.name} index={item.id} />;
      })}
    </>
  );
};

export default FeedbackSystem;
