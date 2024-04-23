import { useState } from "react";
import { ButtonIcon } from "../components/ui/Buttons";
import Dropdown from "../components/ui/Dropdown";
import SearchBar from "../components/ui/SearchBar";
import { HOUSING_PROVINCE } from "../constants";
import AgencyCard from "../components/pages/AgencyCard";

const Agency = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className="box ">
      <div className="w-full flex items-center justify-between box-padding">
        <h1 className="text-primary flex items-center justify-center text-title-1  font-RobotoBold space-x-4">
          <i className="bi-buildings text-[32px]"></i>
          <p>Agence</p>
        </h1>
        <ButtonIcon size="md" icon="bi-plus-lg" />
      </div>

      <div className="box-padding border border-black-10  shadow-sm flex items-center justify-between w-full sticky top-0 z-20 backdrop-blur-sm bg-white py-4">
        <SearchBar
          className="basis-1/3"
          size="md"
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Filtrer par nom"
        />
        <Dropdown
         className='min-[210px]'
          options={HOUSING_PROVINCE}
          icon="bi-filter-circle"
          inversedIcon
          animated={false}
        />
      </div>
      <div className="flex flex-col items-start gap-6 justify-start box-padding w-full">
        <AgencyCard/>
        <AgencyCard/>
        <AgencyCard/>
        <AgencyCard/>
      </div>
    </section>
  );
};

export default Agency;
