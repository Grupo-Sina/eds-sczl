'use client'

import { Button, Input } from "@nextui-org/react";
import React, { FormEvent, useMemo, useState } from "react";

export default function FormComponent() {
  const [ userName, setUserName ] = useState<string>("");
  const [ userSurName, setUserSurName ] = useState<string>('');
  const [ cellphone, setCellphone ] = useState<string>("");


  const handleSubmit = (e: FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault();
  };

  return (
    <form className="z-20 p-[48px] rounded-[16px]  bg-[#0F1768] text-[#fff] w-[40%] shadow-xl">
      <p>Jogada de Mestre</p>
      <h1 className="text-lg #00E275">
        PREENCHA OS DADOS ABAIXO E{" "}
        <span className="text-[#00E275] font-bold">VOTE!</span>
      </h1>
      <div className="flex flex-col">
        <Input
          size="sm"
          type="text"
          label="Nome"
          value={userName}
          isRequired
          labelPlacement="outside"
          onValueChange={setUserName}
          color="danger"
          classNames={{
            label: '',
          }}    
          className="mb-4"
        />
        <Input
          size="sm"
          type="text"
          label="Sobrenome"
          value={userSurName}
          isRequired
          labelPlacement="outside"
          onValueChange={setUserSurName}
          color="danger"
          className="mb-4"
        />
        <Input
          size="sm"
          type="text"
          label="Celular"
          value={cellphone}
          isRequired
          labelPlacement="outside"
          color="danger"
          onValueChange={setCellphone}
          // className=""
        />
      </div>
      <label htmlFor="team">Nome do time*:</label>
      <br />
      <input type="radio" id="teama" name="team" value="Time A" />
      <label htmlFor="team1">Time A</label>
      <br />
      <input type="radio" id="teamb" name="team" value="Time B" />
      <label htmlFor="team2">Time B</label>
      <br />
      <input type="radio" id="teamc" name="team" value="Time C" />
      <label htmlFor="team3">Time C</label>
      <br />
      <input type="radio" id="teamd" name="team" value="Time D" />
      <label htmlFor="team4">Time D</label>
      <Button
        type="submit"
        radius="full"
        size="sm"
        className="bg-[#00E46F] text-[#003B9C] text-[16px] w-full font-heading font-[800] py-[12px]"
      >
        VOTAR
      </Button>
      <p>*cada usuário só pode votar uma vez por dia</p>
      <hr />
      <div>
        <h2>Confere como está o ranking até agora!</h2>
        <Button
          radius="full"
          size="sm"
          variant="bordered"
          className="bg-[#0F1768] text-[#00E46F] text-[16px] border-[#00E46F] font-heading font-[800]"
        >
          VER RANKING
        </Button>
      </div>
    </form>
  );
}
