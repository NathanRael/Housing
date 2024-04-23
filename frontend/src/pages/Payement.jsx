import { Button } from "../components/ui/Buttons";
import { Input, SelectInput } from "../components/ui/Inputs";

const Payement = () => {
  return (
    <div className="box box-padding">
      <h1 className="flex items-center justify-center text-title-1 text-primary font-RobotoBold space-x-4">
        <i className="bi-wallet text-[32px]"></i>
        <p>Payement</p>
      </h1>

      <form action="" className="flex items-center justify-center gap-10 flex-col">
            <div className="flex items-center justify-center flex-col gap-6">
               <Input name="nomCli" title="Nom client" placeholder="Entrer le nom du client"/>
               <Input title="Montant" placeholder="Entrer le montant "/>
               <SelectInput size="lg" color="input" className="w-full"  title="Type de paiement" placeholder="Selectionner le type de payment"/>
            </div>
            <Button value="Regler le paiement" className="w-full" />
      </form>
    </div>
  );
};

export default Payement;
