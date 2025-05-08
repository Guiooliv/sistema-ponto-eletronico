import { useEffect, useState } from "react";

function FormLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        let timerId;
        if (error) {
            timerId = setTimeout(() => {
                setError('');
            }, 5000)
        }
        return () => {
            clearTimeout(timerId);
        }
    }, [error])

    const handlelogin = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.log('Usuário ou senha inválidos.')
                setError(data.message || 'Usuário ou senha inválidos.');
            }
        } catch (error) {
            setError('Erro de conexão com servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <main className="h-screen flex items-center justify-center ">
            <form onSubmit={handlelogin} className="bg-white flex w-[800px] h-[500px] items-center rounded-md font-[Sansation] ">
                <div className=" flex items-center">
                    <div className="flex flex-col items-center justify-center w-[400px] h-[250px] gap-[10px]">
                        <h2 className="font-bold text-2xl">Login</h2>
                        <input type="text" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="off" placeholder="Enter Email" className="p-[6px] w-[80%] h-[30px] bg-[#EFEFEF] rounded-sm focus:border border-solid transition-colors duration-200 border-[#a9cfe5] outline-none" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" placeholder="Enter Password" className=" p-[6px]  w-[80%] h-[30px] bg-[#EFEFEF] rounded-sm focus:border border-solid transition-colors duration-200 border-[#a9cfe5] outline-none" />
                        <button type="submit" className="text-white text-[18px] bg-[#021B33] w-[80%] h-[50px] cursor-pointer hover:bg-[#12577b] rounded-sm">Login</button>
                        <div className="w-[80%] h-[48px] flex items-center justify-center">
                            {error && <p className="text-sm w-full p-1 text-end text-[#12577b]">{error}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center bg-gradient-to-l from-[#12577b] to-[#021B33] h-[500px] w-[400px] rounded-md">
                    <div className="flex flex-col items-center h-[250px] pt-[7px]">
                        <h2 className="text-[24px] font-bold text-[#f7f7f7]">Seja bem vindo!</h2>
                        <p className="text-[#FFFFFF] text-center w-[300px] mt-[16px]">Por gentileza, solicite ao administrador que realize seu cadastro, para que você possa acessar nossa ferramenta.</p>
                    </div>
                </div>
            </form>
        </main>
    );
}
export default FormLogin;