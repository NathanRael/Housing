import Badge from "../ui/Badge";
import { Button, ButtonIcon } from "../ui/Buttons";
import StateBadge from "./StateBadge";

const AgencyCard = () => {
  return (
    <div className="flex flex-col gap-8 rounded-md p-6 justify-start items-start bg-white  w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-subtitle-2 text-black">Agence Nathan</div>
        <div className="flex items-center gap-4">
          <ButtonIcon size="md" icon="bi-pencil-square" color="success" />
          <ButtonIcon size="md" icon="bi-trash" color="danger" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex items-center justify-start gap-4">
          <Badge icon="bi bi-caret-up-fill" value="Client 20" />
          <Badge icon="bi bi-caret-down-fill" iconColor="warning" value="Cite 10" />
          <Badge icon="bi bi-caret-up-fill" value="Revenue +10%" />
        </div>
        {/* <StateBadge color="bg-success" value="Meilleur Agence" /> */}
      </div>
      <Button
        value="Affciher plus d'infomration"
        className="w-1/2"
        icon="bi-caret-down"
        color="secondary"
        iconInverse
      />
    </div>
  );
};

export default AgencyCard;
