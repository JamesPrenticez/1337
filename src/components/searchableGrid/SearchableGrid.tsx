import React, { useState, type ReactElement, type ChangeEvent } from "react";
import { type IData } from '../../modals/IData'
import Card from "./Card";

const SearchableGrid = ({ data }: { data: IData[] }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [filteredData, setFilteredData] = useState<IData[]>(data);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
    const filtered = data.filter((item) => 
      item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.id.toString().toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  }

  return (
    <div className="min-h-screen w-full">
      <div>
        <input 
          type="text"
          className="p-2 border-2 border-sky-500 bg-transparent outline-none w-full rounded-md"
          value={searchValue}
          onChange={(e) => {handleSearch(e)}}
          placeholder="Search..."
        />
      </div>
      <div className="flex pt-2">
          <ul
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-4
            "
          >
            {[...filteredData]
              .map((item) => (
                <Card
                  key={item.id}
                  item={item}
                />
              ))} 
          </ul>
      </div>
    </div>
  )
}

export default SearchableGrid