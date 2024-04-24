import { useEffect, useState } from "react";
import { Button } from "../../components/ui/Buttons";
import { Input, SelectInput } from "../../components/ui/Inputs";
import { houseImage2 } from "../../constants/images";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    libAgt: "",
    codePro: "",
    pwd: "",
  });
  const [provinceOptions, setProvinceOptions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkox" ? checked : value,
      };
    });
  };

  const getProvinceOptions = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/R_inscriptionAgence.php`)
      .then((res) => {
        setProvinceOptions(res.data);
        console.log(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSelectionChange = (selected) => {
    console.log(selected);
    setFormData((prevForm) => ({ ...prevForm, codePro: selected }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { libAgt, codePro, pwd } = formData;
    console.log(formData);
    axios
      .postForm(`${BASE_URL}/R_inscriptionAgence.php`, {
        libAgt,
        codePro,
        pwd,
      })
      .then((res) => {
        console.log(res.data.data);
        alert(res.data?.data?.message);
        sessionStorage.setItem("agence_info", JSON.stringify(res?.data?.data));
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((e) => {
        console.log(e.response.data.data);
        console.log(e?.response?.data?.data?.message);
        alert("Erreur" + e);
      })
      .finally(() => {
        setLoading(false);
        setFormData({
          libAgt: "",
          codePro: "",
          pwd: "",
        });
      });
  };

  useEffect(() => {
    getProvinceOptions();
  }, []);
  return (
    <section className="flex justify-between">
      <div className="flex mt-10 flex-col gap-10 items-center justify-start basis-1/2">
        <h1 className="text-primary text-title-1 w-full text-center">
          Creer votre agence
        </h1>
        <form
          className="flex flex-col gap-10 items-center justify-center w-fit"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <Input
              title="Nom agence"
              placeholder="Entrer le nom de l'agence"
              name="libAgt"
              errorMsg="Le nom de l'agence ..."
              handleChange={handleInputChange}
              value={formData.libAgt}
            />

            <SelectInput
              options={loading ? [{ option: "Loading ..." }] : provinceOptions}
              title="Code province"
              handleSelectionChange={handleSelectionChange}
              color="input"
              className="w-full"
              size="lg"
            />
            <Input
              type="password"
              title="Mot de passe"
              placeholder="Entrer le mot de passe"
              name="pwd"
              errorMsg="Le nom de l'agence ..."
              handleChange={handleInputChange}
              value={formData.pwd}
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
