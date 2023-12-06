export default function FormComponent() {
  return (
    <div className="z-20 p-[48px] rounded-[16px] bg-[#0f1768] text-[#fff] w-[40%]">
      <p>Jogada de Mestre</p>
      <h1>
        PREENCHA OS DADOS ABAIXO E <span>VOTE!</span>
      </h1>
      <div className="flex flex-col">
        <label>Nome*:</label>
        <input type="text" />
        <label>Sobrenome*:</label>
        <input type="text" />
        <label>Celular*:</label>
        <input type="text" />
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
      <button>VOTAR</button>
      <p>*cada usuário só pode votar uma vez por dia</p>
      <hr />
      <div>
        <h2>Confere como está o ranking até agora!</h2>
        <button>VER RANKING</button>
      </div>
    </div>
  );
}
