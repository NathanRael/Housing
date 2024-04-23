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
      <div className="w-full flex items-center justify-between">
        <h1 className="text-primary flex items-center justify-center text-title-1  font-RobotoBold space-x-4">
          <i className="bi-houses text-[32px]"></i>
          <p>Logement</p>
        </h1>
        <ButtonIcon size="md" icon="bi-plus-lg" />
      </div>
      <div className="flex items-center justify-between w-full">
        <SearchBar
          className="basis-1/3"
          size="md"
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Filtrer par cite, code cite"
        />
        <Dropdown
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
      <HouseCard />
    </div>
  );
};

export default Housing;
