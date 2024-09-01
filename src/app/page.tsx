import Game from "./game/page";

export default function Home() {
  return (
    <main className="flex min-h-screen text-[#595984] flex-col items-center justify-start p-24 bg-grad  gap-5">
      <h1 className="text-4xl text-[#595984] p-10">
        Tic Tac Toe Game
      </h1>
      <Game />
    </main>
  );
}
