import { houseImage4 } from "../../constants/images";
import Badge from "../ui/Badge";
import { Button, ButtonIcon } from "../ui/Buttons";

const HouseCard = () => {
  return (
    <div className="flex flex-col gap-7 rounded-md bg-white border border-black-10 p-3 w-[360px]">
      <img
        src={houseImage4}
        className="rounded-md h-[164px] object-cover"
        alt=""
      />

      <div className="flex flex-col items-start justify-between w-full gap-6">
        <h1 className="text-subtitle-2 text-black">500 000 Ar</h1>
        <div className="w-full flex items-center justify-between">
          <Badge value="Agence Rael" />
          <Badge value="Cite Bla" />
          <Badge value="Fianarantsoa" />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <div className="size-3 bg-success rounded-full"></div>
            <span>Disponible</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ButtonIcon size="md" icon="bi-pencil-square" color="success" />
            <ButtonIcon size="md" icon="bi-trash" color="danger" />
          </div>
        </div>
      </div>
      <Button value="Reserver" icon="bi-cart" iconInverse />
    </div>
  );
};

export default HouseCard;
