import { useState } from "react";
import { Button } from "../components/ui/Buttons";
import { FileInput, Input, SelectInput } from "../components/ui/Inputs";

const HousingNew = () => {
  const [formData, setFormData] = useState({
    libAgt: "",
  });
  const handleSelectionChange = (selected) => {
    console.log(selected);
    setFormData((prevForm) => ({ ...prevForm, codePro: selected }));
  };

  return (
    <div className="box box-padding">
      <h1 className="flex items-center justify-center text-title-1 text-primary font-RobotoBold space-x-4">
        <i className="bi-person-plus text-[32px]"></i>
        <p>Ajotuer un logement</p>
      </h1>
      <form
        action=""
        className="flex items-center justify-center gap-10 flex-col"
      >
        <div className="flex items-center justify-center flex-col gap-6">
          <SelectInput
            options={[{ option: "Nathan" }, { option: "Rael" }]}
            title="Nom agence"
            handleSelectionChange={handleSelectionChange}
            color="input"
            className="w-full"
            size="lg"
          />
          {/* <Input
            name="nomTerr"
            title="Nom du terrain"
            placeholder="Entrer le nom du terrain"
          /> */}
          <SelectInput
            options={[{ option: "Nom 1" }]}
            title="Nom terrain"
            
            handleSelectionChange={handleSelectionChange}
            color="input"
            className="w-full"
            size="lg"
          />
          <Input
            name="prixLog"
            title="Prix logement"
            placeholder="Entrer le prix du logement"
          />
          <div className="flex flex-col gap-3">
            <p className="text-base text-black">Image : </p>
            <FileInput name="AdCli" title="Adresse" />
          </div>
        </div>
        <Button value="Ajouter" className="w-full" />
      </form>
    </div>
  );
};

export default HousingNew;
