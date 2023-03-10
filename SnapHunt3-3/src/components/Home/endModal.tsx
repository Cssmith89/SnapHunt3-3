import { useEffect, useRef } from "react";
import { useNavigate } from " react-router-dom";
import { addUser } from "../../Firebase/gameData";
function EndModal({
    totalTime,
    handleUser,
}: {
    totalTime: number;
    handleUser,
}) {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    // const [username, setUsername] = useState<string>("");
    function handleBoardClick() {
        let name = inputRef.current?.value.trim();
        navigate("/leaderboard");
        if (name) {
            addUser(name, totalTime);
            handleUser(name);
        }
    }
    return (
        <div className="h-screen z-[1000] w-screen fixed top-0 bg-gray-200/70">
            <div className=" min-w-[200px] md:min-w-[300px] rounded-lg text-center fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[45%] border flex flex-col justify-between h-max p-2 md:p-4 border-white bg-gray-900/90 text-white gap-4 space-y-2 md:space-y-4 md:space-y-4">
                <h1 className="text-lg md:text-4x1 ">Awesome !</h1>

                <h1 className="font-mono text-sm md:text-[20px]">
                    You took {totalTime} seconds
                </h1>
                <div className="flex gap-2 flex-col items-center justify-evenly">
                    <input
                        placeholder="Username"
                        name="username"
                        ref={inputRef}
                        minLength={3}
                        maxLength={20}
                        className="p-1 px-2 w-[80%] tracking-wider bg-black/50"
                        type="text"
                        autoComplete="off"
                        />

                        <button
                            className="bg-gray-300 hover:bg-purple-200 active:bg-green-200 md:hover:scale-110 transition duration-500 ease-in-out text-black rounded-md px-2 py-1 font-sans my-4 md:text-x1 text-base"
                            onClick={handleBoardClick}
                        >
                            Leaderboard
                        </button>
                </div>
            </div>
        </div>
    );
    }

    export default EndModal;