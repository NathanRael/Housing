import ClientCard from "../components/pages/ClientCard";
import { ButtonIcon } from "../components/ui/Buttons";
import SearchBar from "../components/ui/SearchBar";

const Client = () => {
  return (
    <section className="box ">
      <div className="w-full flex items-center justify-between box-padding">
        <h1 className="text-primary flex items-center justify-center text-title-1  font-RobotoBold space-x-4">
          <i className="bi-person text-[32px]"></i>
          <p>Clients</p>
        </h1>
        <ButtonIcon size="md" icon="bi-plus-lg" />
      </div>

      <div className="box-padding w-full bg-white py-4 sticky top-0 border border-black-10 shadow-sm">
      <SearchBar size="md" className="w-full" placeholder="Filtrer par nom, adresse, lieur"/>
      </div>
      <div className="flex flex-col items-start gap-6 justify-start box-padding w-full">
        <ClientCard/>
        <ClientCard/>
        <ClientCard/>
        <ClientCard/>
      </div>
    </section>
  );
};

export default Client;
