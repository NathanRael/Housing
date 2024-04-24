import { useState } from "react";
import { Button } from "../components/ui/Buttons";
import { Input, SelectInput } from "../components/ui/Inputs";
import axios from "axios";
import { BASE_URL } from "../constants";

const ClientNew = () => {
  const [formData, setFormData] = useState({
    nomCli: "",
    lieuTravCli: "",
    adrsCli: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkox" ? checked : value,
      };
    });
  };

  const resetData = () => {
    setFormData({
      nomCli: "",
      lieuTravCli: "",
      adrsCli: "",
    });
  };

  const handleSubmit = async () => {
    setIsSubmiting(true);
    const { nomCli, lieuTravCli, adrsCli } = formData;
    console.log(formData);
    axios
      .postForm(`${BASE_URL}/R_client.php`, {
        nomCli,
        lieuTravCli,
        adrsCli,
      })
      .then((res) => {
        console.log(res.data.data);
        alert("success" + res.data?.data?.message);
      })
      .catch((e) => {
        console.log(e?.response?.data?.data?.message);
        alert("erreur" + e?.response?.data?.data?.message);
      })
      .finally(() => {
        setIsSubmiting(false);
        resetData();
      });
  };

  return (
    <div className="box box-padding">
      <h1 className="flex items-center justify-center text-title-1 text-primary font-RobotoBold space-x-4">
        <i className="bi-person-plus text-[32px]"></i>
        <p>Ajotuer un client</p>
      </h1>
      <form
        action=""
        className="flex items-center justify-center gap-10 flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-center flex-col gap-6">
          <Input
            name="nomCli"
            title="Nom client"
            placeholder="Entrer le nom du client"
            handleChange={handleInputChange}
            value={formData.nomCli}
          />
          <Input
            name="lieuTravCli"
            title="Adresse"
            placeholder="Entrer l'adresse du client"
            handleChange={handleInputChange}
            value={formData.adrsCli}
          />
          <Input
            name="adrsCli"
            title="Lieu de travail"
            placeholder="Entrer le lieu du client"
            handleChange={handleInputChange}
            value={formData.lieuTravCli}
          />
        </div>
        <Button
          handleClick={handleSubmit}
          value={isSubmiting ? "Ajout ..." : "Ajouter"}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default ClientNew;
