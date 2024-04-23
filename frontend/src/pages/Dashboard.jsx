import { useEffect, useState } from "react";
import StatCard from "../components/pages/StatCard";
import DashboardButton from "../components/pages/DashboardButton";
import axios from "axios";
import { BASE_URL } from "../constants";

const Dashboard = () => {
  const [statCard, setStatCard] = useState([]);
  const [cardLoading, setCardLoading] = useState(false);
  const [authInfo, setauthInfo] = useState([]);

  useEffect(() => {
    const getStat = () => {
      axios.get(`${BASE_URL}/statistique.php`).then((res) => {
        const datas = res?.data?.data;
        setStatCard([
          {
            number: datas[0]?.nbrLogement,
            name: "Logements",
          },
          {
            number: datas[1]?.nbrAgt,
            name: "Agences",
          },
          {
            number: datas[2]?.nbrCli,
            name: "Clients",
          },
        ]);
        console.log(res.data.data);
      });
    };
    getStat();

    setauthInfo(JSON.parse(sessionStorage?.getItem("agence_info")));
  }, []);
  return (
    <section className="box box-padding">
      <h1 className="flex items-center justify-center text-title-1 text-primary font-RobotoBold space-x-4">
        <i className="bi-ui-checks-grid text-[32px]"></i>
        <p>Tableau de bord</p>
      </h1>
      <div className="w-full flex items-center justify-start  rounded-md bg-gradient-primary p-6  text-white ">
        <div className="basis-1/2 space-y-6">
          <h1 className="text-title-2">Agence {authInfo?.libAgt || "Rael"}</h1>
          <p className="text-lead">Meilleur agence du mois</p>
        </div>
        <div className="flex  items-start justify-evenly w-full ms-auto">
          <div className="text-subtitle-2 flex items-center justify-center gap-2 text-success">
            <i className="bi-caret-up"></i>
            Clients
          </div>
          <div className="text-subtitle-2 flex items-center justify-center gap-2 text-success">
            <i className="bi-caret-up"></i>
            Revenues
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        {statCard?.map((item) => (
          <StatCard key={item.name} number={item.number} name={item.name} />
        ))}
      </div>
      <div className="flex w-full flex-col items-start justify-start p-6 pb-10 gap-10 rounded-md bg-white border border-black-10">
        <h3 className="text-title-1 font-RobotoBold text-black-80">Clients</h3>
        <div className="flex items-center justify-between w-full">
          <DashboardButton text="Nouveau Client" icon="bi-person-plus" />
          <DashboardButton
            text="Clients approuvés"
            iconColor="text-success"
            icon="bi-person-check"
          />
          <DashboardButton
            text="Clients en attente"
            iconColor="text-warning"
            icon="bi-person-exclamation"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start p-6 pb-10 gap-10 rounded-md bg-white border border-black-10">
        <h3 className="text-title-1 font-RobotoBold text-black-80">
          Logements
        </h3>
        <div className="flex items-center justify-between w-full">
          <DashboardButton text="Ajouter logement" icon="bi-house-add" />
          <DashboardButton
            text="Logements disponibles"
            iconColor="text-success"
            icon="bi-house-check"
          />
          <DashboardButton
            text="Logements en attente"
            iconColor="text-warning"
            icon="bi-house-exclamation"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
