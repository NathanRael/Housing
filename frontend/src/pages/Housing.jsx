import { useState } from "react";
import { ButtonIcon } from "../components/ui/Buttons";
import SearchBar from "../components/ui/SearchBar";
import Dropdown from "../components/ui/Dropdown";
import { HOUSING_AGENCY, HOUSING_PRICE, HOUSING_PROVINCE } from "../constants";
import HouseCard from "../components/pages/HouseCard";

const Housing = () => {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <div className="box">
      <div className="w-full flex items-center justify-between box-padding">
        <h1 className="text-primary flex items-center justify-center text-title-1  font-RobotoBold space-x-4">
          <i className="bi-houses text-[32px]"></i>
          <p>Logement</p>
        </h1>
        <ButtonIcon size="md" icon="bi-plus-lg" />
      </div>
      <div className="box-padding border border-black-10  shadow-sm flex items-center justify-between w-full sticky top-0 z-20 backdrop-blur-sm bg-white py-4">
        <SearchBar
          className="basis-1/3"
          size="md"
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Filtrer par cite, code cite"
        />
        <Dropdown
        className="min-w-[210px]"
          options={HOUSING_PRICE}
          icon="bi-filter-circle"
          inversedIcon
          animated={false}
        />
        <Dropdown
          options={HOUSING_AGENCY}
          icon="bi-filter-circle"
          inversedIcon
          animated={false}
        />
        <Dropdown
          options={HOUSING_PROVINCE}
          icon="bi-filter-circle"
          inversedIcon
          animated={false}
        />
      </div>
      <div className="flex flex-wrap box-padding gap-6">
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      </div>
    </div>
  );
};

export default Housing;
