import React from "react";
import data from "../data.json";

const Menu = () => {
  return (
    <div>
      {data.categoryItem.map((item) => (
        <div>
          <div>{item.name}</div>
          {item.subCategory && (
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                right: "0",
              }}
            >
              {item.subCategory.map((itm) => (
                <div>{itm}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
