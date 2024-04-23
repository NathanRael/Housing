import React from "react";
import Badge from "../ui/Badge";
import StateBadge from "./StateBadge";
import { Button, ButtonIcon } from "../ui/Buttons";

const ClientCard = () => {
  return (
    <div className="flex flex-col gap-8 rounded-md p-6 justify-start items-start bg-white  w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-subtitle-2 text-black">Rael nathan</div>
        <div className="flex items-center gap-4">
          <ButtonIcon size="md" icon="bi-pencil-square" color="success" />
          <ButtonIcon size="md" icon="bi-trash" color="danger" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex items-center justify-start gap-4">
          <Badge value="Logement N° 1" />
          <Badge value="LOT 305 Andrainjato" />
          <Badge value="Fianarantsoa" />
        </div>
        <StateBadge color="bg-warning" value="Payement incomplet" />
      </div>
        <div className="flex items-center jutify-between gap-4">
            <Button  value="Compléter le payement" color="primary" size="md"/>
            <Button value="Compléter le payement" color="secondary" size="md"/>
        </div>
    </div>
  );
};

export default ClientCard;
