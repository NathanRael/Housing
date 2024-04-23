import { useState } from "react";
import { Button } from "../../components/ui/Buttons";
import { Input } from "../../components/ui/Inputs";
import { houseImage2 } from "../../constants/images";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/ui/Dropdown";
axios.defaults.withCredentials = true;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    libAgt: "",
    codePro: "",
    pwd: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkox" ? checked : value,
      };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { libAgt, codePro, pwd } = formData;
    axios
      .postForm(`${BASE_URL}/R_inscriptionAgence.php`, {
        libAgt,
        codePro,
        pwd,
      })
      .then((res) => {
        alert(res.data?.data?.message);
        console.log(res.data.data);
        sessionStorage.setItem("agence_info", JSON.stringify(res?.data?.data));
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="flex ms-6 justify-between">
      <div className="flex mt-10 flex-col gap-10 justify-start">
        <h1 className="text-primary text-title-1 w-full">Creer votre agence</h1>
        <form
          className="flex flex-col gap-10 items-center justify-center w-fit mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <Input
              title="Nom agence"
              placeholder="Entrer le nom de l'agence"
              name="libAgt"
              errorMsg="Le nom de l'agence ..."
              handleChange={handleInputChange}
            />
            {/* <Input
              title="Code province"
              placeholder="Entrer le code du province"
              name="codePro"
              errorMsg="Le nom de l'agence ..."
              handleChange={handleInputChange}
            /> */}
            <div className="flex items-start justify-start w-full flex-col gap-3">
              <p className="text-base text-black">Code Province :</p>
              <Dropdown color="input" className="w-full" />
            </div>
            <Input
              type="password"
              title="Mot de passe"
              placeholder="Entrer le mot de passe"
              name="pwd"
              errorMsg="Le nom de l'agence ..."
              handleChange={handleInputChange}
            />
          </div>
          <Button
            handleClick={handleSubmit}
            size="lg"
            value={loading ? "Creation ..." : "Creer"}
            className="w-full"
          />
        </form>
      </div>
      <img
        src={houseImage2}
        className="w-1/2 h-screen object-cover basis-1/2"
        alt=""
      />
    </section>
  );
};

export default Signup;
