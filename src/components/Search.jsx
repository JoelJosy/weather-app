"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Search() {
    const placeholders = [
        "Is it raining in Tokyo?",
        "Is it sunny in Paris?",
        "How windy is it in Cape Town?",
        "Type in any city you want!"
      ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    (<div className="h-[20rem] flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>)
  );
}
