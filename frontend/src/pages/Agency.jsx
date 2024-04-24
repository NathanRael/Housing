import { useState } from "react";
import { ButtonIcon } from "../components/ui/Buttons";
import Dropdown from "../components/ui/Dropdown";
import SearchBar from "../components/ui/SearchBar";
import { HOUSING_PROVINCE } from "../constants";
import AgencyCard from "../components/pages/AgencyCard";
import { useAuth } from "../context/AuthProvider";
import Badge from "../components/ui/Badge";

const Agency = () => {
  const [searchValue, setSearchValue] = useState("");
  const { authInfo } = useAuth();
  return (
    <section className="box ">
      <div className="w-full flex items-center justify-between box-padding">
        <h1 className="text-primary flex items-center justify-center text-title-1  font-RobotoBold space-x-4">
          <i className="bi-buildings text-[32px]"></i>
          <p>Agence</p>
        </h1>
        <ButtonIcon size="md" icon="bi-plus-lg" />
      </div>
      <div className="box-padding w-full">
        <AgencyInfoCard />
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
          className="min-[210px]"
          options={HOUSING_PROVINCE}
          icon="bi-filter-circle"
          inversedIcon
          animated={false}
        />
      </div>
      <div className="flex flex-col items-start gap-6 justify-start box-padding w-full">
        <AgencyCard />
        <AgencyCard />
        <AgencyCard />
        <AgencyCard />
      </div>
    </section>
  );
};

export default Agency;

const TextIcon = ({ icon = "", name = "" }) => {
  return (
    <div className="flex gap-2 text-base">
      <i className={icon}></i>
      <p>{name}</p>
    </div>
  );
};

export const AgencyInfoCard = () => {
  const { authInfo } = useAuth();
  return (
    <div className="w-full flex items-start justify-start  rounded-md bg-gradient-primary p-6  text-white flex-col gap-10">
      <div className="flex  items-start justify-between w-full ms-auto">
        <h1 className="text-title-2">Agence {authInfo?.libAgt || "Rael"}</h1>
        <div className="text-title-2 flex items-center justify-center gap-2 text-success ">
          <i className="bi-person-fill"></i>
          42
        </div>
        <div className="text-title-2 flex items-center justify-center gap-2 text-success ">
          <i className="bi-building-fill"></i>
          12
        </div>
        <div className="text-title-2 flex items-center justify-center gap-2 text-success">
          <i className="bi-currency-exchange"></i>+ 25%
        </div>
      </div>
      <div className="flex items-start justify-between w-full gap-4 flex-col">
        <TextIcon icon="bi-geo-alt" name="Fianarantsoa" />
        <div className="flex gap-2 items-center">
          <div className="space-x-2">
            <i className="bi bi-building"></i>
            {/* <span>:</span> */}
          </div>
          <Badge className="bg-white-10" size="md" value="Lakarock" />
          <Badge className="bg-white-10" size="md" value="Lakarock" />
          <Badge className="bg-white-10" size="md" value="Lakarock" />
          <Badge className="bg-white-10" size="md" value="Lakarock" />
        </div>
        
      </div>
      <div className="text-base  text-white bg-gradient-to-br from-warning to-primary rounded-md p-2">Meilleur agence du Mois</div>
    </div>
  );
};
